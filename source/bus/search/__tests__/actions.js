//Actions
import { searchActions } from "../actions";

describe("searchActions", () => {
    test("searchTodo", () => {
        expect(searchActions.searchTodo(__.text)).toMatchInlineSnapshot(`
Object {
  "payload": "searchTodo",
  "type": "SEARCH_TODO",
}
`);
    });
});
