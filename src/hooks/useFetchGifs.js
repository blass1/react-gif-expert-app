import { useEffect, useState } from 'react';
import {getGifs} from '../helpers/getGifs';
/* 
Este custom hook funcionan como si fueran funtional components, pueden tener efectos, pueden usar reducer
 pueden utilizar contextos 
 Este hook nos vba a servir para extraer una peque;a logico para realizar la carga automatica
*/
export const useFetchGifs = ( category ) => {

    // Cuando se inicializa El estado del componente es loading true por defecto y un array vacio
    const [state, setState] = useState({

        data: [],
        loading: true,
    });

    // Con useEffect el codigo solo se va a renderizar CUANDO SE CARGA LA PRIMERA VEZ o cuando cambia la [category]
    useEffect( () => {
        // Promesa
        getGifs(category)
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                });
                
            })
    // Si cambia category se ejecuta de nuevo
    }, [category])

    // .then( imgs => {
    //     // Intencionalemnte utilizamos setTimeout para probarlo
    //     setTimeout( () => {
    //             console.log(imgs)
    //             setState({
    //             data: imgs,
    //             loading: false
    //         });
    //     }, 3000)
        
    // })

    return state; // {data: [], loading: true }

}
