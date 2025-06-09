const request = require('supertest');
const mongoose = require('mongoose');
const User = require('../models/user.model');
const OTPService = require('../services/otp.service');

// Mock du service d'email
jest.mock('../services/email.service', () => ({
    sendOTPByEmail: jest.fn().mockResolvedValue(true)
}));

// Importer la configuration des tests
require('./setup');

describe('OTP Authentication Strategy Tests', () => {
    let testUser;
    const testEmail = 'test@mboaevents.com';
    const testPassword = 'TestPassword123!';

    beforeEach(async () => {
        // Créer un utilisateur de test avant chaque test
        const user = new User({
            email: testEmail,
            password: testPassword,
            username: 'testuser',
            firstName: 'Test',
            lastName: 'User',
            isEmailVerified: false
        });
        testUser = await user.save();
    });

    describe('OTP Generation', () => {
        test('should generate a 6-digit OTP', () => {
            const otp = OTPService.generateOTP();
            expect(otp).toMatch(/^\d{6}$/);
        });

        test('should generate unique OTPs', () => {
            const otps = new Set();
            for (let i = 0; i < 100; i++) {
                otps.add(OTPService.generateOTP());
            }
            expect(otps.size).toBe(100);
        });
    });

    describe('OTP Email Sending', () => {
        test('should send OTP email successfully', async () => {
            const otp = OTPService.generateOTP();
            const result = await OTPService.createAndSendOTP(testEmail);
            expect(result).toBeTruthy();
        });
    });

    describe('OTP Verification Flow', () => {
        test('should store and verify OTP correctly', async () => {
            // Générer et stocker un OTP
            const otp = OTPService.generateOTP();
            testUser.otpData = {
                code: otp,
                expiresAt: new Date(Date.now() + 5 * 60 * 1000),
                attempts: 0
            };
            await testUser.save();

            // Vérifier l'OTP
            const result = await OTPService.verifyOTP(testEmail, otp);
            expect(result).toBeTruthy();

            // Vérifier que l'email est maintenant vérifié
            const verifiedUser = await User.findOne({ email: testEmail });
            expect(verifiedUser.isEmailVerified).toBeTruthy();
            expect(verifiedUser.otpData).toBeUndefined();
        });

        test('should reject invalid OTP', async () => {
            const otp = OTPService.generateOTP();
            testUser.otpData = {
                code: otp,
                expiresAt: new Date(Date.now() + 5 * 60 * 1000),
                attempts: 0
            };
            await testUser.save();

            await expect(OTPService.verifyOTP(testEmail, '000000'))
                .rejects.toThrow('Code OTP invalide');
        });

        test('should reject expired OTP', async () => {
            const otp = OTPService.generateOTP();
            testUser.otpData = {
                code: otp,
                expiresAt: new Date(Date.now() - 1000 * 60 * 6), // 6 minutes dans le passé
                attempts: 0
            };
            await testUser.save();

            await expect(OTPService.verifyOTP(testEmail, otp))
                .rejects.toThrow('Code OTP expiré');
        });
    });

    describe('Security Measures', () => {
        test('should limit failed attempts', async () => {
            const otp = OTPService.generateOTP();
            testUser.otpData = {
                code: otp,
                expiresAt: new Date(Date.now() + 5 * 60 * 1000),
                attempts: 4
            };
            await testUser.save();

            await expect(OTPService.verifyOTP(testEmail, '000000'))
                .rejects.toThrow('Trop de tentatives');
        });

        test('should clear OTP after successful verification', async () => {
            const otp = OTPService.generateOTP();
            testUser.otpData = {
                code: otp,
                expiresAt: new Date(Date.now() + 5 * 60 * 1000),
                attempts: 0
            };
            await testUser.save();

            await OTPService.verifyOTP(testEmail, otp);

            const updatedUser = await User.findOne({ email: testEmail });
            expect(updatedUser.otpData).toBeUndefined();
            expect(updatedUser.isEmailVerified).toBeTruthy();
        });
    });
}); 