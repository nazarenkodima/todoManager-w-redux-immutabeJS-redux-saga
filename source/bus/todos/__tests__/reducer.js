//Core
import { List, fromJS } from "immutable";

//Reducer
import { todosReducer } from "../reducer";

//Actions
import { todoActions } from "../actions";

const initialState = List();

describe("todoReducer:", () => {
    test("should return initial state by default", () => {
        expect(todosReducer(void 0, {})).toEqual(initialState);
    });

    test("should handle FILL_TODOS action", () => {
        expect(todosReducer(void 0, todoActions.fillTodos(__.todos))).toEqual(
            fromJS(__.todos)
        );
    });

    test("should handle CREATE_TODO action", () => {
        expect(todosReducer(void 0, todoActions.createTodo(__.todos[0])))
            .toMatchInlineSnapshot(`
Immutable.List [
  Immutable.Map {
    "completed": false,
    "favorite": false,
    "id": "5cdc0efeb808f56fcaf45470",
    "message": "hello",
  },
]
`);
    });

    test("should handle REMOVE_TODO action", () => {
        expect(
            todosReducer(fromJS(__.todos), todoActions.removeTodo(__.todos[0].id))
        ).toMatchSnapshot();
    });

    test("should handle UPDATE_TODO action", () => {
        expect(
            todosReducer(fromJS(__.todos), todoActions.updateTodo(__.todos[0]))
        ).toEqual(fromJS(__.todos));
    });

    test("should handle COMPLETE_ALL_TODO action", () => {
        expect(
            todosReducer(fromJS(__.todos), todoActions.completeAllTodo(__.todos[0]))
        ).toMatchInlineSnapshot(`
Immutable.List [
  Immutable.Map {
    "completed": true,
    "favorite": false,
    "id": "5cdc0efeb808f56fcaf45470",
    "message": "hello",
  },
]
`);
    });
});
