import React from 'react';
import './Select.scss';

interface SelectProps {
    description?: string;
    options: string[];
    className?: string;
}

function Select(props: SelectProps): JSX.Element {
    return (
        <div className={`selects ${props.className}`}>
            <p className='description'>{props.description}</p>
            <select className='select'>
                <option
                    className='option'
                    selected
                    disabled
                    hidden
                    value=''
                ></option>
                {props.options.map((option, index) => (
                    <option className='option' key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
