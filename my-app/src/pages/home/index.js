import React, { useState } from 'react'
import Header from '../../components/Header';
import Button from '../../components/Button';
import './style.scss';

// Images
import Telephone from '../../assets/telephone.png';
import Dashboard from '../../assets/dashboard.png';

export default function Home() {
    return (
        <>
            <Header />
            <section className="section-01">
                <div className="container">
                    <section className="apresentation">
                        <div><h1> A melhor técnologia de ponta que você pode ter. </h1></div>
                        <div> <figure> <img src={Telephone} alt="Celular" /> </figure> </div>
                    </section>
                </div>
            </section>

            <section className="section-02">
                <div className="container">
                    <header>
                        <ul>
                            <li className="ativo"> <a href=""> Lorem impsum </a> </li>
                            <li> <a href=""> Lorem impsum </a> </li>
                            <li> <a href=""> Lorem impsum </a> </li>
                            <li> <a href=""> Lorem impsum </a> </li>
                        </ul>
                    </header>
                    <article id="article-01">
                        <div className="contents">
                            <div>
                                <figure>
                                    <img src={Dashboard} alt="" />
                                </figure>
                            </div>
                        </div>
                    </article>
                    <article id="article-02">
                        <div className="contents">
                            <div></div>
                        </div>
                    </article>
                    <article id="article-03">
                        <div className="contents">
                            <div></div>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
    
}