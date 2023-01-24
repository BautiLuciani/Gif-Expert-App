import React from 'react'
import { useState } from 'react'

const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e)=>{
        setInputValue(e.target.value)
    }

    const onInputSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length < 1) return;
        onAddCategory(inputValue.trim())
        setInputValue('')
    }


  return (
    <form onSubmit={onInputSubmit}>
        <input 
            type="text"
            placeholder='Buscar Gif'
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}

export default AddCategory