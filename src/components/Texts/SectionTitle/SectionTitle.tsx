import React from 'react';
import './SectionTitle.scss';

interface TextProps {
    children?: React.ReactNode;
    className?: string;
}

/**
 * Renders a text component with the provided children wrapped in a div with the 'text' class.
 *
 * @param {TextProps} props - The properties object for the Text component.
 * @return {JSX.Element} The rendered Text component.
 */
function SectionTitle(props: TextProps): JSX.Element {
    return (
        <h2 className={`sectiontitile ${props.className}`}>{props.children}</h2>
    );
}

export default SectionTitle;

//style component
