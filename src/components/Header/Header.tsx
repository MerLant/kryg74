import React, { useEffect, useState } from 'react';
import './Header.scss';
import Logo from 'images/logo.svg';
import MiniLogo from 'images/logoMini.svg';
import VK from 'images/vk.svg';
import OneClass from 'images/oneclass.svg';
import Burger from 'images/burger.svg';

import { TextButton, Social } from 'components/Buttons';
import { Text } from 'components/Texts';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        if (isOpen) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth', // Добавляем плавную прокрутку
            });
            document.body.style.overflow = 'hidden';
            if (!isOpened) {
                setIsOpened(true);
            }
        } else {
            const element = document.getElementById('nav');
            if (element !== null) {
                if (isOpened) {
                    document.body.style.overflow = '';
                    element.classList.add('closed');
                }
            }
        }
    }, [isOpen]);
    return (
        <>
            <header className={`header ${isOpen ? 'fixid' : ''}`}>
                <div className='title'>
                    <img className='img' src={Logo} alt='Лого' />
                    <img className='imgmini' src={MiniLogo} alt='Лого' />
                    <div className='left'>
                        <Text className='address'>
                            площадь Революции, г. Челябинск
                        </Text>
                        <div className='social'>
                            <Social src={VK} href='#' />
                            <Social src={OneClass} href='#' />
                        </div>
                    </div>
                    <button
                        className='hamburger'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <img src={Burger} />
                    </button>
                </div>
                <nav id='nav' className={`nav ${isOpen ? 'open' : ''}`}>
                    <TextButton href='#'>Маршруты</TextButton>
                    <TextButton href='#'>О нас</TextButton>
                    <TextButton href='#'>Статьи</TextButton>
                    <TextButton href='#'>Контакты</TextButton>
                    <TextButton href='#'>Корзина</TextButton>
                    <TextButton href='#'>Избранное</TextButton>
                    <TextButton href='#'>Профиль</TextButton>
                </nav>
            </header>
            <div className={`${isOpen ? 'plus' : ''}`}></div>
        </>
    );
}

export default Header;
