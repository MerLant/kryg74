import React from 'react';
import './Button.scss';

interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return (
    <button className='button'>
      {props.text}
    </button>
  );
}

export default Button;
