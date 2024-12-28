import React from 'react';
import './NewList.css';

const NewList = (props) => {
    const addListHandler = (event) => {
        event.preventDefault();

        const newList = {
            id: 4,
            text: "Add new list!"
        }
        props.onAddList(newList);
    }
    return (
        <form className='new-list' onSubmit={addListHandler}>
            <input type='text' />
            <button type='submit'>Add</button>
        </form>
    );
}

export default NewList;