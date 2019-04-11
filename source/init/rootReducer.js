import { combineReducers } from 'redux';

//Reducers
import { uiReducer as ui } from '../bus/ui/reducer';
import { todosReducer as todos } from '../bus/todos/reducer';

export const rootReducer = combineReducers({
    ui,
    todos,
});
