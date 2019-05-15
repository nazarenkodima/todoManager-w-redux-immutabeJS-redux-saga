// Core
import React, { PureComponent } from 'react';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';

// Components
import Checkbox from '../../theme/assets/Checkbox';
import Remove from '../../theme/assets/Remove';
import Edit from '../../theme/assets/Edit';
import Star from '../../theme/assets/Star';

export default class Task extends PureComponent {

    componentDidUpdate () {
        const { editTodo, id } = this.props;

        editTodo.get('id') === id ? this.taskInput.current.focus() : null;
    }

    taskInput = React.createRef();

    _getTaskShape = ({
        id = this.props.id,
        completed = this.props.completed,
        favorite = this.props.favorite,
        message = this.props.message,
    }) => ({
        id,
        completed,
        favorite,
        message,

    });

    _removeTodo = () => {
        const { actions, id } = this.props;

        actions.removeTodoAsync(id);
    };

    _toggleCompleted = () => {
        const { actions, completed } = this.props;

        actions.updateTodoAsync(this._getTaskShape({ completed: !completed }));
    };

    _toggleFavorite = () => {
        const { actions, favorite } = this.props;

        actions.updateTodoAsync(this._getTaskShape({ favorite: !favorite }));
    }

    _toggleEditing = () => {
        const { actions, editTodo, message, id } = this.props;

        editTodo.get('id') === id ? actions.editCancel() : actions.editTodo(id, message);
    }

    _updateNewTaskMessage = (event) => {
        const { actions } = this.props;
        const newMessage = event.target.value;

        actions.updateEditedTodo(newMessage);
    };

    _updateTaskMessageOnKeyDown = (event) => {
        const { editTodo, actions } = this.props;
        const enterKey = event.key === "Enter";
        const escapeKey = event.key === "Escape";
        const newMessage = editTodo.get('newMessage');

        if (!newMessage.trim()) {
            return null;
        }

        if (enterKey) {
            actions.updateTodoAsync(this._getTaskShape({ message: newMessage }));
            actions.editCancel();
        }

        if (escapeKey) {
            actions.editCancel();
        }
    }

    render () {
        const { message, completed, favorite, editTodo, id } = this.props;
        const editInput = editTodo.get('id') === id;

        const styles = cx(Styles.task, {
            [Styles.completed]: completed,
        });

        return (
            <li className = { styles }>
                <div className = { Styles.content }>
                    <Checkbox
                        checked = { completed }
                        className = { Styles.toggleTaskCompletedState }
                        color1 = '#3B8EF3'
                        color2 = '#FFF'
                        inlineBlock
                        onClick = { this._toggleCompleted }
                    />
                    <input
                        disabled = { !editInput }
                        maxLength = { 50 }
                        ref = { this.taskInput }
                        type = 'text'
                        value = { editInput ? editTodo.get('newMessage') : message }
                        onChange = { this._updateNewTaskMessage }
                        onKeyDown = { this._updateTaskMessageOnKeyDown }
                    />
                </div>
                <div className = { Styles.actions }>
                    <Star
                        checked = { favorite }
                        inlineBlock
                        className = { Styles.toggleTaskFavoriteState }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._toggleFavorite }
                    />
                    <Edit
                        inlineBlock
                        checked = { false }
                        className = { Styles.updateTaskMessageOnClick }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._toggleEditing }
                    />
                    <Remove
                        inlineBlock
                        className = { Styles.removeTask }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._removeTodo }
                    />
                </div>
            </li>
        );
    }
}
