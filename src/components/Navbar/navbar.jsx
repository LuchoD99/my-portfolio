import React from 'react';
import './navbar.css';
export default function navbar() {
    return (
        <header className="navbarPerfil">
            <nav className="navbar container">
                <a href="javascript:location.reload()" class="nav-link">
                    LEDO
                </a>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#Inicio" className="nav-link">
                            Inicio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#Perfil" className="nav-link">
                            Perfil
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#Tecnologia" className="nav-link">
                            Tecnologia
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#Proyecto" className="nav-link">
                            Proyectos
                        </a>
                    </li>
                    {/* <li className="nav-item">
                        <a href="#" className="nav-link">
                            Contactos
                        </a>
                    </li> */}
                    <div className="active"></div>
                </ul>
            </nav>
        </header>
    );
}
//Debe tener Home, perfil(about), skills, proyectos, contactos
