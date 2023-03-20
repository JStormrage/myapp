import { Request, Response } from 'express';
import { Todo, todoStore } from '../models/todo';

export const addTodo = (req: Request, res: Response) => {

    
  const content = req.body.content;

  if (!content) {
    res.status(400).json({ error: 'Content cannot be blank' });
    return;
  }

  const newTodo = new Todo(content);
  todoStore.add(newTodo);
  res.status(201).json(newTodo);
};

export const getTodos = (_req: Request, res: Response) => {
  res.json(todoStore.getAll());
};