import { Todo } from '../../src/models/todo';

test('Todo model has correct properties', () => {
  const content = 'Test todo';
  const todo = new Todo(content);

  expect(todo).toHaveProperty('id');
  expect(todo).toHaveProperty('createdAt');
  expect(todo).toHaveProperty('content', content);
});