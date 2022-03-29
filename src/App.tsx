import React, { FC, useState, useRef, useEffect } from 'react';
import TodoList from './components/todo-list/TodoList';
import { Todo } from './components/types/data';

import './index.css';

const App: FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  const handleOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    e.key === 'Enter' && addTodo();
  };

  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  },[])

  const addTodo = () => {
    if (value) {
      
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          completed: false,
        },
      ]);
      setValue('');
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const chekedTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo

      return {
        ...todo,
        completed: !todo.completed
      }
    }))
  }

  return (
    <div className="app__container">
      <div className="app__content">
        <div className="app__input-box">
          <input
            className="input-box__input"
            type="text"
            placeholder="Введи список дел"
            value={value}
            ref={inputRef}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
          />
          <button className="btn" onClick={addTodo}>
            +
          </button>
        </div>
        <TodoList
          items={todos}
          chekedTodo={chekedTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
};

export default App;
