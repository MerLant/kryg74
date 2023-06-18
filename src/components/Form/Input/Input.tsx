import React from 'react';
import './Input.scss';

interface InputProps {
    description?: string;
    type: string;
    className?: string;
}

/**
 * Renders a text component with the provided children wrapped in a div with the 'text' class.
 *
 * @param {InputProps} props - The properties object for the Text component.
 * @return {JSX.Element} The rendered Text component.
 */
function Input(props: InputProps): JSX.Element {
    return (
        <div className={`inputs ${props.className}`}>
            <p className='description'>{props.description}</p>
            <input
                value=''
                placeholder=''
                type={props.type}
                className='input'
            />
        </div>
    );
}

export default Input;

//style component
