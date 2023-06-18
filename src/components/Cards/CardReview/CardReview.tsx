import React from 'react';
import './CardReview.scss';
import { Text, SectionTitle } from 'components/Texts';

interface CardReviewProps {
    className?: string;
    image?: string;
    children?: React.ReactNode;
    name?: string;
}

function CardReview(props: CardReviewProps): JSX.Element {
    return (
        <div className={`cardreview ${props.className}`}>
            <img className='photo' src={props.image} alt='Фото человека' />
            <SectionTitle className='name'>{props.name}</SectionTitle>
            <Text>{props.children}</Text>
        </div>
    );
}

export default CardReview;

//style component
