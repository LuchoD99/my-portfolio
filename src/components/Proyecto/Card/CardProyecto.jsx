import React from 'react';
import style from './Card_proyecto.module.css';

export default function CardProyecto({ titulo, url, image, description }) {
    return (
        <div className={style.card}>
            <img src={image} className={style.imagen} alt="img not found" />
            <div className={style.contenido}>
                <a
                    className={style.enlace}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className={style.name}>{titulo}</span>
                </a>
                <p className={style.texto}>{description}</p>
            </div>
        </div>
    );
}
