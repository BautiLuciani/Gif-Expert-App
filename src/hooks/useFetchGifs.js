import React, { useEffect, useState } from 'react'
import getGifs from '../helpers/getGifs,js'

const useFetchGifs = (category) => {
    const [images, setImages] = useState([]) 
    const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getGifs(category)
        .then(newImages => setImages(newImages))
        .then(setIsLoading(false))
  }, [])
  
  return {
    images: images,
    isLoading: isLoading,

    // al ser iguales los nombres tambien podriamos escribirlo asi
    // images,
    // isLoading
  }
}

export default useFetchGifs