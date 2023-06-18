import React from 'react';
import './Button.scss';

interface ButtonProps {
    href?: string;
    children?: React.ReactNode;
    them?: 'btn-dark | btn-white';
    fullWidth?: boolean;
    className?: string;
}

function Button(props: ButtonProps) {
    return (
        <button
            className={`button ${props.fullWidth ? 'full-width' : ''} ${
                props.className
            }`}
        >
            <a href={props.href} className='link'>
                {props.children}
            </a>
        </button>
    );
}

export default Button;
