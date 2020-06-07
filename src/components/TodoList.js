import React from 'react';
import { useRecoilValue } from 'recoil';
import TodoItemCreator from 'components/TodoItemCreator';
import TodoItem from 'components/TodoItem';
import TodoListFilters from 'components/TodoListFilters';
import TodoListStats from 'components/TodoListStats';
import filteredTodoListState from 'selectors/filteredTodoListState';

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState);
    return (
      <>
        <TodoListStats />
        <TodoListFilters />
        <TodoItemCreator />
        {todoList && todoList.map(item => (<TodoItem key={item.id} item={item} />))}
      </>
    );
};

export default TodoList;
