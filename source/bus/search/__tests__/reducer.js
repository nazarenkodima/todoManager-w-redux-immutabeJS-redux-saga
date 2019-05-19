//Core
import { Map } from "immutable";

//Reducer
import { searchReducer } from "../reducer";

//Actions
import { searchActions } from "../actions";

const initialState = Map({
    searchTodo: "",
});

describe("searchReducer:", () => {
    test("should return initial state by default", () => {
        expect(searchReducer(void 0, {})).toEqual(initialState);
    });

    test("should handle SEARCH_TODO action", () => {
        expect(searchReducer(void 0, searchActions.searchTodo(__.text)))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "searchTodo": "searchTodo",
}
`);
    });
});
