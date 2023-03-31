import React from 'react';
import style from './Card_proyecto.module.css';

export default function CardProyecto({ titulo, url, image, description }) {
    return (
        <div>
            <img src={image} className={style.imagen} alt="img not found" />
            <div>
                <h5>{titulo}</h5>
                <h6>{url}</h6>
                <p>{description}</p>
            </div>
        </div>
    );
}
