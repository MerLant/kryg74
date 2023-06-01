import React from 'react';
import './TextButton.scss';

interface TextButtonProps {
    children?: React.ReactNode;
    href?: string;
}

/**
 * Renders a navigation button component as an anchor tag with the provided href and children.
 *
 * @param {TextButtonProps} props - The props object containing the href and children.
 * @return {JSX.Element} - A JSX element representing the navigation button component.
 */
function TextButton(props: TextButtonProps): JSX.Element {
    return (
        <a href={props.href} className='NavButton'>
            {props.children}
        </a>
    );
}

export default TextButton;
