import { v4 as uuidv4 } from 'uuid';

export class Todo {
  id: string;
  createdAt: Date;
  content: string;

  constructor(content: string) {
    this.id = uuidv4();
    this.createdAt = new Date();
    this.content = content;
  }
}

export class TodoStore {
  private todos: Map<string, Todo> = new Map();

  add(todo: Todo) {
    this.todos.set(todo.id, todo);
  }

  getAll(): Todo[] {
    return Array.from(this.todos.values());
  }
}

export const todoStore = new TodoStore();