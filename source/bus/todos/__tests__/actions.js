//Actions
import { todoActions } from "../actions";

describe("todoActions:", () => {
    test("fillTodos", () => {
        expect(todoActions.fillTodos(__.todos)).toMatchInlineSnapshot(`
Object {
  "payload": Array [
    Object {
      "completed": false,
      "favorite": false,
      "id": "5cdc0efeb808f56fcaf45470",
      "message": "hello",
    },
  ],
  "type": "FILL_TODOS",
}
`);
    });

    test("createTodo", () => {
        expect(todoActions.createTodo(__.todos[0])).toMatchInlineSnapshot(`
Object {
  "payload": Object {
    "completed": false,
    "favorite": false,
    "id": "5cdc0efeb808f56fcaf45470",
    "message": "hello",
  },
  "type": "CREATE_TODO",
}
`);
    });

    test("removeTodo", () => {
        expect(todoActions.removeTodo(__.todos[0].id)).toMatchInlineSnapshot(`
Object {
  "payload": "5cdc0efeb808f56fcaf45470",
  "type": "REMOVE_TODO",
}
`);
    });

    test("updateTodo", () => {
        expect(todoActions.updateTodo(__.todos[0])).toMatchInlineSnapshot(`
Object {
  "payload": Object {
    "completed": false,
    "favorite": false,
    "id": "5cdc0efeb808f56fcaf45470",
    "message": "hello",
  },
  "type": "UPDATE_TODO",
}
`);
    });

    test("completeAllTodo", () => {
        expect(todoActions.completeAllTodo()).toMatchInlineSnapshot(`
Object {
  "type": "COMPLETE_ALL_TODO",
}
`);
    });

    test("fetchTodosAsync", () => {
        expect(todoActions.fetchTodosAsync()).toMatchInlineSnapshot(`
Object {
  "type": "FETCH_TODOS_ASYNC",
}
`);
    });

    test("createTodoAsync", () => {
        expect(todoActions.createTodoAsync(__.todos[0])).toMatchInlineSnapshot(`
Object {
  "payload": Object {
    "completed": false,
    "favorite": false,
    "id": "5cdc0efeb808f56fcaf45470",
    "message": "hello",
  },
  "type": "CREATE_TODO_ASYNC",
}
`);
    });

    test("removeTodoAsync", () => {
        expect(todoActions.removeTodoAsync(__.todos[0].id)).toMatchInlineSnapshot(`
Object {
  "payload": "5cdc0efeb808f56fcaf45470",
  "type": "REMOVE_TODO_ASYNC",
}
`);
    });

    test("updateTodoAsync", () => {
        expect(todoActions.updateTodoAsync(__.todos[0])).toMatchInlineSnapshot(`
Object {
  "payload": Object {
    "completed": false,
    "favorite": false,
    "id": "5cdc0efeb808f56fcaf45470",
    "message": "hello",
  },
  "type": "UPDATE_TODO_ASYNC",
}
`);
    });

    test("completeAllTodoAsync", () => {
        expect(todoActions.completeAllTodoAsync()).toMatchInlineSnapshot(`
Object {
  "type": "COMPLETE_ALL_TODO_ASYNC",
}
`);
    });
});
