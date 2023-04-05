import React from 'react';
import image from '../image/face.jpg';
import './perfil.css';
import archivo from './archivo/CV-LUCIANO-DIAZ.pdf';
export default function Perfil() {
    return (
        <div id="Perfil" className="perfil">
            <div className="text-info">
                <h3 className="text">
                    Soy un Full Stack Developer. Soy una persona trabajadora
                    enfocado en el proyecto, soy joven y con mucha energía para
                    aprender y mejorar durante el proyecto.
                </h3>
                <a className="descarga" href={archivo} download>
                    CV
                </a>
            </div>
            <div className="text-img">
                <img className="imagenes" src={image} alt="img not found" />
            </div>
        </div>
    );
}
//Sobre mi y foto y pdf de CV
