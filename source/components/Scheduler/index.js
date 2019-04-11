// Core
import React, { Component, createRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import Styles from './styles.m.css';
import { scheduler } from '../../bus/forms/shapes';

// Components
import Task from '../Task';
import Checkbox from '../../theme/assets/Checkbox';
import Spinner from '../Spinner';
import Catcher from '../Catcher';

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
              createTodoAsync: todoActions.createTodoAsync  
            },
            dispatch),
    };
};
@connect(mapStateToProps, mapDispatchToProps)
export default class Scheduler extends Component {
    formikForm = createRef();

    componentDidMount () {
        const { actions } = this.props;
        actions.fetchTodosAsync();
    }


    _submitForm = (formData, actions) => {
        this._createTodo(formData);
        actions.resetForm();
    };

    _createTodo = ({ todo }) => {
        if (!todo) {
            return null;
        }
        this.props.actions.createTodoAsync(todo);
    };

    _submitFormOnEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            this.formikForm.current.submitForm();
        }
    };

    render () {
        const { todos } = this.props;
        
        const todoList = todos.map((task) => (
            <Catcher key = { task.get('id') }>
                <Task
                completed = { task.completed }
                favorite = { task.favorite }
                id = { task.id }
                key = { task.id }
                message = { task.get('message') }
                { ...task }
            />
            </Catcher>
        ));

        return (
            <section className = { Styles.scheduler }>
            <Spinner/>
                <main>
                    <header>
                        <h1>Task Manager</h1>
                        <input placeholder = 'Поиск' type = 'search' />
                    </header>
                    <Formik
                        initialValues = { scheduler.shape}
                        ref = { this.formikForm }
                        render = {() => {
                            return (
                        <section>
                        <Form>
                            <Field
                                className = { Styles.createTask }
                                maxLength = { 50 }
                                placeholder = 'add task'
                                type = 'text'
                                name = 'todo'
                            />
                            <button type = 'submit'>add Todo</button>
                        </Form>
                        <div className = { Styles.overlay }>
                            <ul>{todoList}</ul>
                        </div>
                        </section>
                            )
                        }}
                        validationSchema = { scheduler.schema }
                        onSubmit = { this._submitForm }
                    />
                    <footer>
                        <Checkbox checked color1 = '#363636' color2 = '#fff' />
                        <span className = { Styles.completeAllTasks }>
                            All tasks completed
                        </span>
                    </footer>
                </main>
            </section>
        );
    }
}
