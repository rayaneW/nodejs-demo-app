const request = require('supertest');
const app = require('../src/app');
const userModel = require('../src/models/userModel');

describe('User API Tests', () => {
  beforeEach(() => {
    // Reset users before each test
    userModel.resetUsers([
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' }
    ]);
  });

  describe('GET /users', () => {
    test('should return all users', async () => {
      const response = await request(app).get('/users');
      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(2);
      expect(response.body[0].name).toBe('Alice');
    });
  });

  describe('GET /users/:id', () => {
    test('should return a single user', async () => {
      const response = await request(app).get('/users/1');
      expect(response.status).toBe(200);
      expect(response.body.name).toBe('Alice');
      expect(response.body.email).toBe('alice@example.com');
    });

    test('should return 404 for non-existent user', async () => {
      const response = await request(app).get('/users/99');
      expect(response.status).toBe(404);
      expect(response.body.error).toBe('User not found');
    });
  });

  describe('POST /users', () => {
    test('should create a new user', async () => {
      const newUser = { name: 'Charlie', email: 'charlie@example.com' };
      const response = await request(app)
        .post('/users')
        .send(newUser);
      
      expect(response.status).toBe(201);
      expect(response.body.name).toBe('Charlie');
      expect(response.body).toHaveProperty('id');
    });

    test('should return 400 for invalid data', async () => {
      const response = await request(app)
        .post('/users')
        .send({ name: 'Incomplete' });
      
      expect(response.status).toBe(400);
    });

    test('should validate email format', async () => {
      const response = await request(app)
        .post('/users')
        .send({ name: 'Test', email: 'invalid-email' });
      
      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });
  });

  describe('PUT /users/:id', () => {
    test('should update an existing user', async () => {
      const response = await request(app)
        .put('/users/1')
        .send({ name: 'Alice Updated' });
      
      expect(response.status).toBe(200);
      expect(response.body.name).toBe('Alice Updated');
      expect(response.body.email).toBe('alice@example.com');
    });

    test('should return 404 for non-existent user', async () => {
      const response = await request(app)
        .put('/users/99')
        .send({ name: 'Test' });
      
      expect(response.status).toBe(404);
    });

    test('should return 400 for empty update', async () => {
      const response = await request(app)
        .put('/users/1')
        .send({});
      
      expect(response.status).toBe(400);
    });
  });

  describe('DELETE /users/:id', () => {
    test('should delete an existing user', async () => {
      const response = await request(app).delete('/users/1');
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('User deleted');

      // Verify user is deleted
      const getResponse = await request(app).get('/users/1');
      expect(getResponse.status).toBe(404);
    });

    test('should return 404 for non-existent user', async () => {
      const response = await request(app).delete('/users/999');
      expect(response.status).toBe(404);
    });
  });
});