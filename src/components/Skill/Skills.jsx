import React from 'react';
import css from '../../image/css.png';
import express from '../../image/expressjs.png';
import html from '../../image/html.png';
import javascript from '../../image/javascript.png';
import node from '../../image/nodejs.png';
import postresql from '../../image/postresql.png';
import react from '../../image/react.png';
import redux from '../../image/redux.jpg';
import sequelize from '../../image/sequielize.png';
import Card from './Card/Card';
import style from './Skills.module.css';
export default function Skills() {
    let logos = [
        [css, 'css'],
        [express, 'express'],
        [html, 'html'],
        [javascript, 'javascript'],
        [node, 'nodeJS'],
        [postresql, 'postgreSQL'],
        [react, 'react'],
        [redux, 'redux'],
        [sequelize, 'sequelize'],
    ];
    return (
        <div className={style.main}>
            <h1 className={style.title}>Tecnologias</h1>
            <div className={style.logos}>
                {logos.map((e, i) => (
                    <div key={i}>
                        <Card img={e[0]} name={e[1]} />
                    </div>
                ))}
            </div>
        </div>
    );
}
