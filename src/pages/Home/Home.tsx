import React, { useState } from 'react';
import './Home.scss';

import CardOne from 'images/card1.png';
import CardTwo from 'images/card2.png';
import CardThree from 'images/card3.png';

import Image1 from 'images/gallery1.png';
import Image2 from 'images/gallery2.png';
import Image3 from 'images/gallery3.png';
import Image4 from 'images/gallery4.png';

import {
    Button,
    Text,
    H1,
    BigText,
    Input,
    Select,
    CardAbout,
    SectionTitle,
} from 'components';
import { string } from 'yup';

function getImageClassName(imageClass: string, expandedImage: string) {
    if (expandedImage === imageClass) {
        return imageClass + ' expanded';
    } else {
        if (expandedImage !== '') {
            return imageClass + ' none';
        }
    }
    return imageClass;
}

function Home() {
    const duration: string[] = [];
    for (let i = 0; i < 10; i++) {
        duration.push(`День ${i + 1}`);
    }
    const programType: string[] = [
        'тематическая программа',
        'сюжетная программа',
        'квест',
        'поездка',
        'экскурсия',
        'детский',
        'активный',
    ];

    const places: string[] = [
        'Челябинск',
        'Екатеринбург',
        'Миасс',
        'Златоуст',
        'Пермь',
        'Кунгур',
        'Троицк',
        'Чебаркуль',
        'Зюраткуль',
        'Таганай',
    ];

    const [expandedImage, setExpandedImage] = useState('');
    const handleImageClick = (imageName: string) => {
        setExpandedImage(prevImage =>
            prevImage === imageName ? '' : imageName,
        );
    };
    return (
        <main className='app'>
            <section className='welcome'>
                <H1>Навстречу красоте</H1>
                <BigText>лучшие места родного края</BigText>
                <div className='void'></div>
                <Button href='#'>Забронировать тур</Button>
            </section>
            <section className='settings'>
                <form className='form'>
                    <div className='firstline'>
                        <Select description='Откуда' options={places}></Select>
                        <Select description='Куда' options={places}></Select>
                        <Input type='date' description='Дата'></Input>
                    </div>
                    <div className='secondline'>
                        <Select
                            description='Длительность'
                            options={duration}
                        ></Select>
                        <Input type='' description='Кол-во человек'></Input>
                        <Select
                            description='Вид'
                            options={programType}
                        ></Select>
                        <Button fullWidth={true} href='#'>
                            Найти туры
                        </Button>
                    </div>
                </form>
            </section>
            <section className='cards'>
                <div className='line'>
                    <CardAbout href='' image={CardOne}>
                        Где отдохнуть в зимние выходные?
                    </CardAbout>
                    <CardAbout href='' image={CardTwo}>
                        Фестиваль Уральские валенки в г. Куса
                    </CardAbout>
                    <CardAbout href='' image={CardThree}>
                        Музей пельменя г. Миасс
                    </CardAbout>
                </div>
            </section>
            <section className='gallerys'>
                <div className='block'>
                    <SectionTitle>Галерея</SectionTitle>
                    <div className='gallery'>
                        <div
                            style={{ backgroundImage: `url(${Image1})` }}
                            className={getImageClassName(
                                'image1',
                                expandedImage,
                            )}
                            onClick={() => handleImageClick('image1')}
                        />
                        <div
                            style={{ backgroundImage: `url(${Image2})` }}
                            className={getImageClassName(
                                'image2',
                                expandedImage,
                            )}
                            onClick={() => handleImageClick('image2')}
                        />
                        <div
                            style={{ backgroundImage: `url(${Image3})` }}
                            className={getImageClassName(
                                'image3',
                                expandedImage,
                            )}
                            onClick={() => handleImageClick('image3')}
                        />
                        <div
                            style={{ backgroundImage: `url(${Image4})` }}
                            className={getImageClassName(
                                'image4',
                                expandedImage,
                            )}
                            onClick={() => handleImageClick('image4')}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
