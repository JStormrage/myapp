import request from 'supertest';
import express from 'express';
import { todoRoutes } from '../../src/routes/todoRoutes';

const app = express();
app.use(express.json());
app.use('/todos', todoRoutes);

describe('Todo App e2e tests', () => {
  it('GET /todos - should return a list of todos', async () => {
    const response = await request(app).get('/todos');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  // Can add more e2e tests for other endpoints here
});