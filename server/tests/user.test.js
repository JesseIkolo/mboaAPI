const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const User = require('../models/user.model');

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('User Model Test', () => {
    it('should create & save user successfully', async () => {
        const validUser = new User({
            email: 'test@test.com',
            password: 'test123',
            username: 'testuser',
            firstName: 'Test',
            lastName: 'User',
            phone: '+237123456789'
        });
        const savedUser = await validUser.save();
        
        expect(savedUser._id).toBeDefined();
        expect(savedUser.email).toBe(validUser.email);
        expect(savedUser.username).toBe(validUser.username);
        expect(savedUser.phone).toBe(validUser.phone);
        expect(savedUser.password).not.toBe('test123'); // Password should be hashed
    });

    it('should fail to save user without required fields', async () => {
        const userWithoutRequiredField = new User({ email: 'test@test.com' });
        let err;
        try {
            await userWithoutRequiredField.save();
        } catch (error) {
            err = error;
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    });
}); 