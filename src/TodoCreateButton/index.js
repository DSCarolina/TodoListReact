import React from 'react';
import './TodoCreateButton.css';

function TodoCreateButton(props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }

    // prevState nos permite recibir el estado anterior

    return(
        <button className='TodoCreateButton'
        onClick={onClickButton}>
            +
        </button>
    );
}

export {TodoCreateButton};