import React from 'react';
import './CardAbout.scss';

interface CardProps {
    className?: string;
    image?: string;
    children?: React.ReactNode;
    href?: string;
}

/**
 * Renders a text component with the provided children wrapped in a div with the 'text' class.
 *
 * @param {CardProps} props - The properties object for the Text component.
 * @return {JSX.Element} The rendered Text component.
 */
function CardAbout(props: CardProps): JSX.Element {
    return (
        <a
            href=''
            style={{ backgroundImage: `url(${props.image})` }}
            className={`cardabout ${props.className}`}
        >
            {props.children}
        </a>
    );
}

export default CardAbout;

//style component
