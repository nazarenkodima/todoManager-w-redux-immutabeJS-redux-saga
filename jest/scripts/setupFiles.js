/* Setup files module.
**
** This module will be executed before each test.
**
** This module contains a code to configure or set up the
** testing environment before each test. Since every test
** runs in its own environment, these scripts will be
** executed in the testing environment immediately before
** executing the test code itself.
**
** This module excutes before setupFramework module.
**
*/

import { LocalStorage } from './mocks/localStorage';

global.localStorage = new LocalStorage();

const todos = [
    {
        completed: false,
        favorite:  false,
        id:        "5cdc0efeb808f56fcaf45470",
        message:   "hello",
    }
];

const todo = 'hello';

const message =   {
    completed: false,
    favorite:  false,
    id:        "5cdc0efeb808f56fcaf45470",
    message:   "hello",
};

const successMesasge = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';

const error = new Error(errorMessage);

const responseDataSuccess = {
    data:    todos,
    message: successMesasge,
};

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseSuccess = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseSuccess204 = {
    status: 204,
};

const fetchResponseFail400 = {
    status: 400,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail401 = {
    status: 401,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const id = '12345678910a';

const text = 'searchTodo';

global.__ = {
    error,
    id,
    message,
    text,
    todos,
    fetchResponseSuccess,
    fetchResponseFail400,
    fetchResponseSuccess204,
    fetchResponseFail401,
    todo,
};

global.__ENV__ = global.__PROD__ = process.env.NODE_ENV;
