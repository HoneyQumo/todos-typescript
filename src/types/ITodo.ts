export type ITodo = {
  id: number;
  title: string;
  completed: boolean;
}

export type ITodosInitialState = {
  todos: ITodo [];
  status: string;
  error: string | null;
}