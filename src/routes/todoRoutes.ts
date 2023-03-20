import { Router } from 'express';
import { addTodo, getTodos } from '../controllers/todoController';

export const todoRoutes = Router();

todoRoutes.post('/', addTodo);
todoRoutes.get('/', getTodos);