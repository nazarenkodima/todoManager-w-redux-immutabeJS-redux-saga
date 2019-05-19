//actions
import { editActions } from "../actions";

describe("editActions:", () => {
    test("editTodo", () => {
        expect(editActions.editTodo(__.id, __.message)).toMatchInlineSnapshot(`
Object {
  "payload": Object {
    "id": "12345678910a",
    "message": Object {
      "completed": false,
      "favorite": false,
      "id": "5cdc0efeb808f56fcaf45470",
      "message": "hello",
    },
  },
  "type": "EDIT_TODO",
}
`);
    });

    test("updateEditedTodo", () => {
        expect(editActions.updateEditedTodo(__.message)).toMatchInlineSnapshot(`
Object {
  "payload": Object {
    "completed": false,
    "favorite": false,
    "id": "5cdc0efeb808f56fcaf45470",
    "message": "hello",
  },
  "type": "UPDATE_EDITED_TODO",
}
`);
    });

    test("editCancel", () => {
        expect(editActions.editCancel()).toMatchInlineSnapshot(`
Object {
  "type": "EDIT_CANCEL",
}
`);
    });
});
