import React from 'react';
import './Footer.scss';
import Logo from 'images/logoBW.svg';
import VK from 'images/vk.svg';
import OneClass from 'images/oneclass.svg';
import TG from 'images/TG.svg';

import { TextButton, Social } from 'components/Buttons';

function Footer() {
    return (
        <footer className='footer'>
            <img src={Logo} />
            <TextButton href='#'>Маршруты</TextButton>
            <div className='about'>
                <TextButton href='#'>О нас</TextButton>
                <TextButton href='#'>Статьи</TextButton>
                <TextButton href='#'>Контакты</TextButton>
            </div>
            <div className='user'>
                <TextButton href='#'>Профиль</TextButton>
                <TextButton href='#'>Корзина</TextButton>
                <TextButton href='#'>Избранное</TextButton>
            </div>
            <div className='social'>
                <Social href='#' src={VK}></Social>
                <Social href='#' src={OneClass}></Social>
                <Social href='#' src={TG}></Social>
            </div>
        </footer>
    );
}

export default Footer;
