import React from 'react';
import './Text.scss';

interface TextProps {
    children?: React.ReactNode;
}

/**
 * Renders a text component with the provided children wrapped in a div with the 'text' class.
 *
 * @param {TextProps} props - The properties object for the Text component.
 * @return {JSX.Element} The rendered Text component.
 */
function Text(props: TextProps): JSX.Element {
    return <div className='text'>{props.children}</div>;
}

export default Text;
