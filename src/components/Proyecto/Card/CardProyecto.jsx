import React from 'react';
import style from './Card_proyecto.module.css';

export default function CardProyecto({ titulo, url, image, description }) {
    return (
        <div className={style.card}>
            <img src={image} className={style.imagen} alt="img not found" />
            <div>
                <a href={url}>{titulo}</a>
                <p>{description}</p>
            </div>
        </div>
    );
}
