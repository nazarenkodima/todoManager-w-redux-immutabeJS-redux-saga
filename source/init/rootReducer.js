import { combineReducers } from 'redux';

//Reducers
import { uiReducer as ui } from '../bus/ui/reducer';
import { todosReducer as todos } from '../bus/todos/reducer';
import { searchReducer as search } from '../bus/search/reducer';
import { editTodoReducer as editTodo } from '../bus/editTodo/reducer';

export const rootReducer = combineReducers({
    ui,
    todos,
    search,
    editTodo,
});
