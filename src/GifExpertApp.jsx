import React from 'react'
import { useState } from 'react'
import AddCategory from './componentes/AddCategory'
import GifGrid from './componentes/GifGrid'
import './styles.css'

const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    let mayuscula = categories.map(item =>{return(item.toUpperCase())})
    
    const onAddCategory = (valor)=>{
        if(mayuscula.includes(valor.toUpperCase())) return;
        setCategories([valor, ...categories])
    }

  return (
    <>
        {/*Titulo*/}
        <h1>GifExpertApp</h1>

        {/*Input*/}
        <AddCategory onAddCategory={onAddCategory}/>

        {/*Listado de Gif*/}
        {categories.map( category => (
            <GifGrid key={category} category={category}/>
        ))}
    </>
  )
}

export default GifExpertApp