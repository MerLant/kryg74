import React from 'react';
import './Button.scss';

interface ButtonProps {
    children?: React.ReactNode;
    them?: 'btn-dark | btn-white';
}

function Button(props: ButtonProps) {
    return <button className='button'>{props.children}</button>;
}

export default Button;
