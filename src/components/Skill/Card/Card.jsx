import React from 'react';
import style from './Card.module.css';
export default function Card({ img, name }) {
    return (
        <div>
            <img className={style.fondo} src={img} alt={name} />
            <h3>{name}</h3>
        </div>
    );
}
