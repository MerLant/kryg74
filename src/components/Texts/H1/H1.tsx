import React from 'react';
import './H1.scss';

interface TextProps {
    children?: React.ReactNode;
}

/**
 * Renders a text component with the provided children wrapped in a div with the 'text' class.
 *
 * @param {TextProps} props - The properties object for the Text component.
 * @return {JSX.Element} The rendered Text component.
 */
function H1(props: TextProps): JSX.Element {
    return <h1 className='h1'>{props.children}</h1>;
}

export default H1;

//style component
