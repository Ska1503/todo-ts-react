import { FC } from 'react';
import TodoItem from '../todo-item/TodoItem';
import { Todo } from '../types/data';

type TodoListProps = {
  items: Todo[],
  removeTodo: (id: number) => void
  chekedTodo: (id: number) => void
};

const TodoList: FC<TodoListProps> = ({ items, removeTodo, chekedTodo }) => {
  return (
    <div className="app__todo-list">
      <div className="todo-list__items">
        {
          items.map(todo => <TodoItem
          key={todo.id}
          chekedTodo={chekedTodo}
          removeTodo={removeTodo}
          {...todo}
        />
        )}
      </div>
    </div>
  );
};

export default TodoList;
