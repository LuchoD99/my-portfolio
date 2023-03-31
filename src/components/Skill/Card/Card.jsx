import React from 'react';
import style from './Card.module.css';
export default function Card({ img, name }) {
    return (
        <div className={style.container_main}>
            <img className={style.img} src={img} alt={name} />
            <h3 className={style.subtitle}>{name}</h3>
        </div>
    );
}
