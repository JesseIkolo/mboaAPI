const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');
const { User, ADMIN_ROLES, PERMISSIONS } = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

describe('Admin Management System', () => {
    let superAdminToken;
    let normalAdminToken;
    let testSuperAdmin;
    let testAdmin;

    beforeAll(async () => {
        // Connexion à la base de données de test
        await mongoose.connect(process.env.MONGODB_URI_TEST);

        // Créer un super admin pour les tests
        testSuperAdmin = await User.create({
            username: 'testsuperadmin',
            email: 'testsuperadmin@test.com',
            phone: '+237600000001',
            password: await bcrypt.hash('password123', 10),
            firstName: 'Test',
            lastName: 'SuperAdmin',
            role: ADMIN_ROLES.SUPERADMIN,
            adminType: ADMIN_ROLES.SUPERADMIN,
            isAdminValidated: true,
            emailVerified: true,
            isVerified: true
        });

        // Créer un admin normal pour les tests
        testAdmin = await User.create({
            username: 'testadmin',
            email: 'testadmin@test.com',
            phone: '+237600000002',
            password: await bcrypt.hash('password123', 10),
            firstName: 'Test',
            lastName: 'Admin',
            role: ADMIN_ROLES.MBOA_MANAGER,
            adminType: ADMIN_ROLES.MBOA_MANAGER,
            isAdminValidated: false,
            emailVerified: true,
            isVerified: true
        });

        // Générer les tokens
        superAdminToken = jwt.sign(
            { id: testSuperAdmin._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        normalAdminToken = jwt.sign(
            { id: testAdmin._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
    });

    afterAll(async () => {
        // Nettoyer la base de données après les tests
        await User.deleteMany({});
        await mongoose.connection.close();
    });

    describe('Admin Validation', () => {
        it('should allow super admin to validate a pending admin', async () => {
            const response = await request(app)
                .put(`/api/admin/validate/${testAdmin._id}`)
                .set('Authorization', `Bearer ${superAdminToken}`)
                .send({
                    customPermissions: [PERMISSIONS.MANAGE_USERS, PERMISSIONS.MANAGE_EVENTS]
                });

            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Compte administrateur validé avec succès');

            const updatedAdmin = await User.findById(testAdmin._id);
            expect(updatedAdmin.isAdminValidated).toBe(true);
            expect(updatedAdmin.permissions).toContain(PERMISSIONS.MANAGE_USERS);
            expect(updatedAdmin.permissions).toContain(PERMISSIONS.MANAGE_EVENTS);
        });

        it('should not allow normal admin to validate other admins', async () => {
            const response = await request(app)
                .put(`/api/admin/validate/${testAdmin._id}`)
                .set('Authorization', `Bearer ${normalAdminToken}`)
                .send({
                    customPermissions: [PERMISSIONS.MANAGE_USERS]
                });

            expect(response.status).toBe(403);
        });
    });

    describe('Permission Management', () => {
        it('should allow super admin to update admin permissions', async () => {
            const response = await request(app)
                .put(`/api/admin/permissions/${testAdmin._id}`)
                .set('Authorization', `Bearer ${superAdminToken}`)
                .send({
                    permissions: [PERMISSIONS.MANAGE_ADS]
                });

            expect(response.status).toBe(200);
            
            const updatedAdmin = await User.findById(testAdmin._id);
            expect(updatedAdmin.permissions).toContain(PERMISSIONS.MANAGE_ADS);
            expect(updatedAdmin.permissions).not.toContain(PERMISSIONS.MANAGE_USERS);
        });

        it('should not allow modifying super admin permissions', async () => {
            const response = await request(app)
                .put(`/api/admin/permissions/${testSuperAdmin._id}`)
                .set('Authorization', `Bearer ${superAdminToken}`)
                .send({
                    permissions: [PERMISSIONS.MANAGE_USERS]
                });

            expect(response.status).toBe(400);
        });
    });

    describe('Admin Listing', () => {
        it('should return all admins for super admin', async () => {
            const response = await request(app)
                .get('/api/admin/all')
                .set('Authorization', `Bearer ${superAdminToken}`);

            expect(response.status).toBe(200);
            expect(response.body.length).toBeGreaterThanOrEqual(2);
        });

        it('should return pending admins for super admin', async () => {
            // Créer un nouvel admin en attente
            await User.create({
                username: 'pendingadmin',
                email: 'pending@test.com',
                phone: '+237600000003',
                password: await bcrypt.hash('password123', 10),
                firstName: 'Pending',
                lastName: 'Admin',
                role: ADMIN_ROLES.ACCOUNT_MANAGER,
                adminType: ADMIN_ROLES.ACCOUNT_MANAGER,
                isAdminValidated: false
            });

            const response = await request(app)
                .get('/api/admin/pending')
                .set('Authorization', `Bearer ${superAdminToken}`);

            expect(response.status).toBe(200);
            expect(response.body.length).toBeGreaterThanOrEqual(1);
            expect(response.body[0].isAdminValidated).toBe(false);
        });
    });

    describe('Permission Checking', () => {
        it('should check permissions correctly', async () => {
            const admin = await User.findById(testAdmin._id);
            
            // Test single permission
            expect(admin.hasPermission(PERMISSIONS.MANAGE_ADS)).toBe(true);
            expect(admin.hasPermission(PERMISSIONS.MANAGE_USERS)).toBe(false);

            // Test multiple permissions
            expect(admin.hasPermissions([PERMISSIONS.MANAGE_ADS])).toBe(true);
            expect(admin.hasPermissions([PERMISSIONS.MANAGE_ADS, PERMISSIONS.MANAGE_USERS])).toBe(false);
        });

        it('should set default permissions on admin type change', async () => {
            const admin = await User.findById(testAdmin._id);
            admin.adminType = ADMIN_ROLES.ADS_MANAGER;
            await admin.save();

            expect(admin.permissions).toEqual([PERMISSIONS.MANAGE_ADS]);
        });
    });
}); 