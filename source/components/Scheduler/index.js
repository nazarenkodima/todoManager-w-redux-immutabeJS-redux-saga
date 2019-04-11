// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import Styles from './styles.m.css';

// Components
import Task from '../Task';
import Checkbox from '../../theme/assets/Checkbox';
import Spinner from '../Spinner';

//Actions
import { todoActions } from '../../bus/todos/actions';

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            { fetchTodosAsync: todoActions.fetchTodosAsync,
            },
            dispatch),
    };
};
@connect(mapStateToProps, mapDispatchToProps)
export default class Scheduler extends Component {

    componentDidMount () {
        const { actions } = this.props;

        actions.fetchTodosAsync();
    }

    _submitTodo = () => {

    }

    _handleFormSubmit = (event) => {
        event.preventDefault();
        this._submitTodo();
    }

    render () {
        const { todos } = this.props;

        const todoList = todos.map((task) => (
            <Task
                completed = { task.completed }
                favorite = { task.favorite }
                id = { task.id }
                key = { task.id }
                message = { task.message }
                { ...task }
            />
        ));

        return (
            <section className = { Styles.scheduler }>
            <Spinner/>
                <main>
                    <header>
                        <h1>Планировщик задач</h1>
                        <input placeholder = 'Поиск' type = 'search' />
                    </header>
                    <section>
                        <form onSubmit = { this._handleFormSubmit }>
                            <input
                                className = { Styles.createTask }
                                maxLength = { 50 }
                                placeholder = 'Описание моей новой задачи'
                                type = 'text'
                            />
                            <button>Добавить задачу</button>
                        </form>
                        <div className = { Styles.overlay }>
                            <ul>{todoList}</ul>
                        </div>
                    </section>
                    <footer>
                        <Checkbox checked color1 = '#363636' color2 = '#fff' />
                        <span className = { Styles.completeAllTasks }>
                            Все задачи выполнены
                        </span>
                    </footer>
                </main>
            </section>
        );
    }
}
