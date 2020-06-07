import { selector } from 'recoil';
import filteredTodoListState from 'selectors/filteredTodoListState';

export default selector({
    key: 'todoListStatsState',
    get: ({ get }) => {
        const todoList = get(filteredTodoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted,
        };
    },
});
