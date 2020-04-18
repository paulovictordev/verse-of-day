import React from 'react';
import "./styles.css";

const Button = ({ disabled, children, onClick }) => {

    return (
        <button
            className="button"
            disabled={disabled}
            onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;