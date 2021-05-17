import React, { useState} from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
    
    const categoriesArr = ['One punch'];
    const [categories, setCategories] = useState(categoriesArr)

    // const handleAdd = () => {
    //     //  Utilizo el setCategories para trabajar con los atributos de las categorias
    //     // Metodo 1) 
    //     // Para agregar un nuevo elemento al arreglo tengo que usar el operador spred (...)
    //     // Que basicamente llama al ultimo estado de la categoria y el segundo argumento agrego el elemento
    //     //setCategories( [...categories, 'Nuevo elemento'] )
    //     //setCategories( ['Nuevo elemento', ...categories] )
    //     // Metodo 2 con un metodo
    //     setCategories( cats => ['Nuevo elemento', ...categories] )
    // }

    return (
        <>
            <h2>GifExpertApp v1.0</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>            
        
        <ol>
            {   
                // metodo de los array "map" recorre como un for los elementos
                // y devuelve 2 atributos (elObjeto, suIdInterno)
                // categories.map( category => {
                //     //Cada objeto tiene que tener su key, en este caso le asignamos la categoria
                //     return <li key={category}>{ category }</li>
                // })
                categories.map( category => (
                    <GifGrid 
                        key={category}
                        category={category}
                        
                    />
                ))
            }
            <hr/> 
        </ol>
        


        </>
    )
}
