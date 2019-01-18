import React from 'react';
import './modal.css'

function Modal (props) {
    return (
        <div className='Modal'>
            <button 
                onClick={props.handleClick}
                className='Modal-close'
            >
            </button>
            {props.children}
        </div>
    )
}

export default Modal;