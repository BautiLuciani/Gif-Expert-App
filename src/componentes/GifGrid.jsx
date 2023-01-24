import React, { useEffect, useState } from 'react'
import getGifs from '../helpers/getGifs,js'
import useFetchGifs from '../hooks/useFetchGifs'
import GifItems from './GifItems'

const GifGrid = ({category}) => {

    // creamos un Custom Hook: useFetchGifs
    const {images, isLoading} = useFetchGifs(category)

    {
        isLoading && (<h2>Cargando...</h2>)
        //este codigo significa que si isLoading es true se va a cumplir la condicion a la derecha del &&
        //en caso de que sea false retorna un null
    }
  
  return (
    <>
        <h3>{category}</h3>
        <div className='card-grid'>
            {images.map(img => (
                <GifItems 
                    key={img.id}
                    // de esta manera exparcimos las props de img
                    {...img}
                />
            ))}
        </div>
    </>
  )
}

export default GifGrid