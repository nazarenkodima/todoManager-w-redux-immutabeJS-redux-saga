// Core
import React, { Component, createRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import Styles from './styles.m.css';
import { scheduler } from '../../bus/forms/shapes';
import FlipMove from "react-flip-move";
import { sortTasksByGroup } from '../../instruments/helpers';

// Components
import Task from '../Task';
import Checkbox from '../../theme/assets/Checkbox';
import Spinner from '../Spinner';
import Catcher from '../Catcher';

//Actions
import { todoActions } from '../../bus/todos/actions';
import { searchActions } from '../../bus/search/actions';

const mapStateToProps = ({todos, search},) => {
    return {
        todos: sortTasksByGroup(todos),
        searchTodo: search.get('searchTodo')
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            { ...todoActions,
              ...searchActions
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

    _createTodo = ({ todo }) => {
        if (!todo) {
            return null;
        }
        this.props.actions.createTodoAsync(todo);
    };

    _filterTodo = (todo) => {
        const { searchTodo } = this.props;
        return todo.get('message').toLocaleLowerCase().includes(searchTodo);
    };

    _searchTodo = (event) => {
        const { actions } = this.props;
         actions.searchTodo(event.target.value)
    }

    _submitForm = (formData, actions) => {
        this._createTodo(formData);
        actions.resetForm();
    };


    render () {
        const { todos, actions } = this.props;
     
        const allCompleted = todos.every((todo) => todo.get('completed') === true);
        console.log('todos → ', todos);
        const todoList = todos.filter(this._filterTodo).map((todo) => (
            // <Catcher >
                <Task
                actions = { actions }
                completed = { todo.get('completed') }
                favorite = { todo.get('favorite')}
                id = { todo.get('id') }
                key = { todo.get('id') }
                message = { todo.get('message') }
                { ...todo }
            />
            /* </Catcher> */
        ));

        return (
            <section className = { Styles.scheduler }>
            <Spinner/>
                <main>
                    <header>
                        <h1>Task Manager</h1>
                        <input placeholder = 'search' type = 'search' onChange = { this._searchTodo }/>
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
                            <ul>
                                <FlipMove>{todoList}</FlipMove>
                            </ul>
                        </div>
                        </section>
                            )
                        }}
                        validationSchema = { scheduler.schema }
                        onSubmit = { this._submitForm }
                    />
                    <footer>
                        <Checkbox 
                        checked = { allCompleted }
                        color1 = '#363636'
                        color2 = '#fff'
                        onClick = { actions.completeAllTodoAsync } />
                        <span className = { Styles.completeAllTasks }>
                            All tasks completed
                        </span>
                    </footer>
                </main>
            </section>
        );
    }
}
