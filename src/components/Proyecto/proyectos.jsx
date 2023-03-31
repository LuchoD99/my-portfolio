import React from 'react';
import climaApp from './img_proyectos/clima_app.png';
import foodApp from './img_proyectos/food_api.png';
import quoteMaquine from './img_proyectos/quote_maquine.png';
import CardProyecto from './Card/CardProyecto';

export default function Proyectos() {
    let proyectos = [
        {
            titulo: 'Clima App',
            image: climaApp,
            url: 'https://app-clima-ledo.netlify.app',
            description:
                'Esto es una App de clima, te trae el clima en tiempo real de cualquier pais.',
        },
        {
            titulo: 'Food App',
            image: foodApp,
            url: 'https://github.com/LuchoD99/FOOD-APP',
            description:
                'Es un App de tipo de recetas creada con base de datos Postgress, la conecion del BackEnd con Express y node; en el FrontEnd con React, Javascript y CSS en el diseño',
        },
        {
            titulo: 'Quote Maquine',
            image: quoteMaquine,
            url: 'https://quote-maquine.vercel.app',
            description:
                'Es una App creada con React, Javascript con estilos CSS; trae diferentes tweets de una API y cada cambio cambia el color de fondo',
        },
    ];
    return (
        <div>
            <h2>Proyectos</h2>
            {proyectos.map((e, i) => (
                <div>
                    <CardProyecto
                        titulo={e.titulo}
                        image={e.image}
                        url={e.url}
                        description={e.description}
                    />
                </div>
            ))}
        </div>
    );
}
