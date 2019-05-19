//Core
import { Map } from "immutable";

//Reducer
import { editTodoReducer } from "../reducer";

//Actions
import { editActions } from "../actions";

const initialState = Map({
    id:         "",
    newMessage: "",
});

describe("editTodoReducer:", () => {
    test("should return initial state by default", () => {
        expect(editTodoReducer(void 0, {})).toEqual(initialState);
    });

    test("should handle EDIT_TODO action", () => {
        expect(editTodoReducer(void 0, editActions.editTodo(__.id, __.message)))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "12345678910a",
  "newMessage": Immutable.Map {
    "completed": false,
    "favorite": false,
    "id": "5cdc0efeb808f56fcaf45470",
    "message": "hello",
  },
}
`);
    });

    test("should handle UPDATE_EDITED_TODO action", () => {
        expect(editTodoReducer(void 0, editActions.updateEditedTodo(__.message)))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "newMessage": Object {
    "completed": false,
    "favorite": false,
    "id": "5cdc0efeb808f56fcaf45470",
    "message": "hello",
  },
}
`);
    });

    test("should handle EDIT_CANCEL action", () => {
        expect(editTodoReducer(void 0, editActions.editCancel())).toEqual(
            initialState
        );
    });
});
