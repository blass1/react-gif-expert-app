//import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GifGridItem} from './GifGridItem'


export const GifGrid = ({ category }) => {
    
    // Imagenes, cuando se carga esta vacio
    // const [images, setImages] = useState([])

    // desestructuro el loading del custum hook (useFetchGif) y lo utilizo en el return del componente
    // renombro data a images con el :
    const { data:images, loading } = useFetchGifs( category );
    
    return (
        <>
            <h3 className="animate__rollOut">{ category }</h3>

            {/* Operador ternario IF - CONDICION - SIESTRUE - SIESFALSE */}
            {/* { loading ? 'Cargando....' : 'Data cargada correctamente' } */}
            {/* Evalua la primera condicion y si es true muestra el loading */}
            { loading && <h2 className="animate__flash">Loading......</h2>}

            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            //Spread del img 
                            { ...img }
                        />
                    ))
                }

        </div>
        </>

    )
}
