import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifItems } from './GifItems';

export const GifGrid = ( {category} ) => {
    // los dos puntos en la desestructuracion es para cambiar el nombre, 
    // no para usar algun argumento ni nada, solo renombra
    const { data:images, loading } = useFetchGifs( category );

    

    return (
        <>
            <h3 className="animate__animated animate__flipInX">{category}</h3>
            <h4 className="animate__animated animate__flash">{ loading && <p>Cargando...</p> }</h4>
            <div className="card-grid">
                {
                    // hay que hacer un mapeo (foreach) para que haga el ciclo del array pero aqui llamamos el GifItems para que se muestren de otra forma
                    images.map( ( img ) => (
                        <GifItems 
                        key={ img.id }
                        // mandamos con el operador spread para que al momento de que se reciba en el otro componente se haga la desestructuracion
                        { ...img } />
                    ))
                }
            </div>
        </>
    )
}
