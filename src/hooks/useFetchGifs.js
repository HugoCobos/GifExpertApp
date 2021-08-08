import { useEffect, useState } from "react"
import { getGift } from '../helpers/getGifs'
export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });
 // useEffect aqui nos serve para que cuando haya un cambio en el DOM no vuelva a hacer la peticion del fetch
    useEffect( () => {

        getGift( category )
            .then( img => {
                // le asignamos segundos de carga
                // console.log(img)
                setTimeout( () => {
                    setState({
                        data: img,
                        loading:false,
                    })

                }, 300 );

            } )
    }, [ category ])

    return state; // {data: [], loading: true}
}
