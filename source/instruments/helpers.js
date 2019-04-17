import { moment } from 'moment';

export function getDisplayName (WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export const sortTasksByDate = (todos) => {

    return todos.sort((todo1, todo2) => {
        if (todo1.get('created') < todo2.get('created')) {
            return 1;
        } else if (
            moment(todo1.get('created')).unix() > moment(todo2.get('created')).unix()
        ) {
            return -1;
        }

        return 0;
    });
};

export const getUniqueID = (length = 15) => {
    if (typeof length !== 'number') {
        throw new Error('The function argument should be a number!');
    }

    let text = '';
    const possible
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

export const sortTasksByGroup = (todos) => {
    const favorite = todos.filter((todo) => todo.get('favorite') && !todo.get('completed'));
    const usual = todos.filter((todo) => !todo.get('favorite') && !todo.get('completed'));
    const completed = sortTasksByDate(todos.filter((todo) => todo.get('completed')));

    const sortedCompleted = [
        ...completed.sort((todo1, todo2) => {
            if (todo1.get('favorite') && !todo2.get('favorite')) {
                return -1;
            } else if (!todo1.get('favorite') && todo2.get('favorite')) {
                return 1;
            }

            return 0;
        })
    ];

    return [
        ...sortTasksByDate(favorite),
        ...sortTasksByDate(usual),
        ...sortedCompleted
    ];
};
