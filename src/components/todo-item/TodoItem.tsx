import { FC } from 'react';
import { Todo } from '../types/data';

import './TodoItem.css';

type TodoItemProps = Todo & {
  removeTodo: (id: number) => void;
  chekedTodo: (id: number) => void;
};

const TodoItem: FC<TodoItemProps> = ({ id, title, completed, removeTodo, chekedTodo }) => {
  return (
    <div className="todo-item">
      <input type="checkbox"
        checked={completed}
        onChange={() => chekedTodo(id)}
      />
      <span className="todo-item__text">{title}</span>
      <button
        className="todo-item__btn"
        onClick={() => removeTodo(id)}
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
