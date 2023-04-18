import React from 'react';
import image from '../image/face.jpg';
import archivo from '../../archivo/CV-LUCIANO-DIAZ.pdf';
import style from './Perfil.module.css';
export default function Perfil() {
    return (
        <div id="Perfil" className={style.perfil}>
            <div className={style.text_info}>
                <h3 className="text">
                    Soy un Full Stack Developer. Soy una persona trabajadora
                    enfocado en el proyecto, soy joven y con mucha energía para
                    aprender y mejorar durante el proyecto.
                </h3>
                <a className={style.descarga} href={archivo} download>
                    CV
                </a>
            </div>
            <div className={style.text_img}>
                <img
                    className={style.imagenes}
                    src={image}
                    alt="img not found"
                />
            </div>
        </div>
    );
}
