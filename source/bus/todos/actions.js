
//Actions
import { types } from './types';

export const todoActions = {
    //Sync
    fillTodos: (todos) => {
        return {
            type:    types.FILL_TODOS,
            payload: todos,
        };
    },
    createTodo: (todo) => {
        return {
            type:    types.CREATE_TODO,
            payload: todo,
        };
    },
    removeTodo: (todoID) => {
        return {
            type:    types.REMOVE_TODO,
            payload: todoID,
        };
    },
    //Async
    fetchTodosAsync: () => {
        return {
            type: types.FETCH_TODOS_ASYNC,
        };
    },
    createTodoAsync: (todo) => {
        return {
            type:    types.CREATE_TODO_ASYNC,
            payload: todo,
        };
    },
    removeTodoAsync: (todoID) => {
        return {
            type:    types.REMOVE_TODO_ASYNC,
            payload: todoID,
        };
    },
}
;
