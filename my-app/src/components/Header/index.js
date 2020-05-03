import React, { Component } from 'react';
import './styles.scss';

if(window.onscroll) scroll();

window.addEventListener('scroll', scroll, true)
document.querySelectorAll('.open-menu')[0].addEventListener('click', alterMenu, true)
document.querySelectorAll('.menu-itens__close')[0].addEventListener('click', alterMenu, true)
document.querySelectorAll('.main')[0].onclick = () => { if(document.querySelector('.main.blur')) alterMenu() }

function alterMenu(){
    document.querySelectorAll('.menu-itens')[0].classList.toggle('open')
    document.querySelectorAll('.main')[0].classList.toggle('blur')
}

function scroll(){    
    const header = document.querySelector('header')
    if (document.querySelectorAll('html')[0].scrollTop >= 1) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
};

export default class Header extends Component {
    render(){
        return (
            <>
            
            </>
        );
    }
}