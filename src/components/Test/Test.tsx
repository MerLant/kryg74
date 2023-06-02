import React, { useState } from 'react';
import './Test.scss';

function Test() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='burger-menu'>
            <button
                className={`burger-icon ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`menu-items ${isOpen ? 'open' : ''}`}>
                <a href='/'>Главная</a>
                <a href='/about'>О нас</a>
                <a href='/contact'>Контакты</a>
            </div>
        </div>
    );
}

export default Test;
