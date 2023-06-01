import React from 'react';
import './Social.scss';

interface SocialProps {
    src?: string;
    href?: string;
}

/**
 * Renders a social media button as an anchor tag with an image inside.
 *
 * @param {SocialProps} props - The props object that contains the href and src properties.
 * @return {JSX.Element} The JSX element representing the social media button.
 */
function Social(props: SocialProps): JSX.Element {
    return (
        <a href={props.href} className='social'>
            <img className='social-image' src={props.src} alt={props.src}></img>
        </a>
    );
}

export default Social;
