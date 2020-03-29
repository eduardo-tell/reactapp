import React, { useState } from 'react'
import Header from '../../components/Header';
import Button from '../../components/Button';

export default function Home() {
    return (
        <>
            <Header />
            <section className="container">
                <section className="apresentation text-center">
                    <h1> Hello World </h1>
                    <Button label='Teste' />
                </section>
            </section>
        </>
    );
    
}