import React from 'react';
import PropTypes from 'prop-types';
import { useRecoilState } from 'recoil';
import todoListState from 'atoms/todoListState';
import replaceItemAtIndex from 'utils/replaceItemAtIndex';
import removeItemAtIndex from 'utils/removeItemAtIndex';

const TodoItem = ({ item }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex(listItem => listItem === item);

    const editItemText = ({ target: { value } }) => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        text: value,
      });

      setTodoList(newList);
    };

    const toggleItemCompletion = () => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        isComplete: !item.isComplete,
      });

      setTodoList(newList);
    };

    const deleteItem = () => {
      const newList = removeItemAtIndex(todoList, index);
      setTodoList(newList);
    };

    return (
      <div>
        <input type='text' value={item.text} onChange={editItemText} />
        <input
          type='checkbox'
          checked={item.isComplete}
          onChange={toggleItemCompletion}
        />
        <button type='button' onClick={deleteItem}>X</button>
      </div>
    );
};

TodoItem.propTypes = {
  item: PropTypes.shape({ isComplete: PropTypes.bool, text: PropTypes.string }).isRequired,
};

export default TodoItem;
