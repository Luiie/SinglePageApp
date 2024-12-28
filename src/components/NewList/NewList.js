import React, { useState } from 'react';
import './NewList.css';

const NewList = (props) => {
    const [enteredText, setEnteredText] = useState();

    const addListHandler = (event) => {
        event.preventDefault();

        const newList = {
            id: 0,
            text: enteredText
        };

        setEnteredText('');

        props.onAddList(newList);
    };

    const textHandler = (event) => {
        setEnteredText(event.target.value);
    };
    
    return (
        <form className='new-list' onSubmit={addListHandler}>
            <input type='text' value={enteredText} onChange={textHandler}/>
            <button type='submit'>Add</button>
        </form>
    );
}

export default NewList;