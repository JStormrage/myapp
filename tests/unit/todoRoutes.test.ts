import request from 'supertest';
import express from 'express';
import { todoRoutes } from '../../src/routes/todoRoutes';

const app = express();
app.use(express.json());
app.use('/todos', todoRoutes);

test('POST /todos creates a new todo', async () => {
  const content = 'Test todo';
  const response = await request(app).post('/todos').send({ content });

  expect(response.status).toBe(201);
  expect(response.body).toHaveProperty('id');
  expect(response.body).toHaveProperty('createdAt');
  expect(response.body).toHaveProperty('content', content);
});

test('GET /todos returns a list of todos', async () => {
  const response = await request(app).get('/todos');
  expect(response.status).toBe(200);
  expect(response.body).toBeInstanceOf(Array);
});