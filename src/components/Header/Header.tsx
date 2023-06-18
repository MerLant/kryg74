import React from 'react';
import './Header.scss';
import Logo from 'images/logo.svg';
import VK from 'images/vk.svg';
import OneClass from 'images/oneclass.svg';

import { TextButton, Social } from 'components/Buttons';
import { Text } from 'components/Texts';

function Header() {
    return (
        <header className='header'>
            <div className='header-title'>
                <img className='header-titile-img' src={Logo} alt='Лого' />
                <div className='header-titile-left'>
                    <Text>площадь Революции, г. Челябинск</Text>
                    <div className='header-titile-left-social'>
                        <Social src={VK} href='#' />
                        <Social src={OneClass} href='#' />
                    </div>
                </div>
            </div>
            <nav className='header-nav'>
                <TextButton href='#'>Маршруты</TextButton>
                <TextButton href='#'>О нас</TextButton>
                <TextButton href='#'>Статьи</TextButton>
                <TextButton href='#'>Контакты</TextButton>
                <TextButton href='#'>Корзина</TextButton>
                <TextButton href='#'>Избранное</TextButton>
                <TextButton href='#'>Профиль</TextButton>
            </nav>
        </header>
    );
}

export default Header;
