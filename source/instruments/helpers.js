import { moment } from 'moment';

export function getDisplayName (WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export const sorttodosByDate = (todos) => {
    return todos.sort((todo1, todo2) => {
        if (moment(todo1.created).unix() < moment(todo2.created).unix()) {
            return 1;
        } else if (
            moment(todo1.created).unix() > moment(todo2.created).unix()
        ) {
            return -1;
        }

        return 0;
    });
};

export const sorttodosByGroup = (todos) => {
    const favorite = todos.filter((todo) => todo.favorite && !todo.completed);
    const usual = todos.filter((todo) => !todo.favorite && !todo.completed);
    const completed = sorttodosByDate(todos.filter((todo) => todo.completed));

    const sortedCompleted = [
        ...completed.sort((todo1, todo2) => {
            if (todo1.favorite && !todo2.favorite) {
                return -1;
            } else if (!todo1.favorite && todo2.favorite) {
                return 1;
            }

            return 0;
        })
    ];

    return [
        ...sorttodosByDate(favorite),
        ...sorttodosByDate(usual),
        ...sortedCompleted
    ];
};
