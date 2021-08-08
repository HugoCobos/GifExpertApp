import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//apiKye = '35gH0cOwU1Pqat7FPOv9DF8ODrlL5Ky3';

export const GifExpertApp = () => {

    // const categories = ['Dragon Ball', 'Sword Art Online', 'Gobling Slayer'];
    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     // Para hacer un push o sea agregar un nuevo elemento al arreglo seria de la siguientes formas
    //     // setCategories( [...categories, 'SAO'] )
    //     setCategories( cat => [...cat, 'SAO'] );

    // }

    return (
        <>
        <h2>GifExpertApp</h2>
        {/* llamamos el componente y le pasamos el setCategory que sirve para anexar el valor del input en el component principal */}
        <AddCategory setCategory={ setCategories }/>
        <hr />
        {/* hacemos una lista ordenada de las categories */}
        <ol>
            {
                categories.map( categoria => <GifGrid 
                    key={categoria}
                    category={categoria}
                    />)
            }
        </ol>
    </>
        );
    };
