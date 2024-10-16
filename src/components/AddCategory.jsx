import React from 'react'
import { useState } from 'react'  

export const AddCategory = ({ onNewCategory   }) => {
  
 //Creacion de estado
  const [inputValue, setInputValue] = useState('one punch');

  //Funcion que se encarga de actualizar el estado
  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

//Funcion que se encarga de no dejar hacer refresh la pagina
  const onSubmit = (event) => {
    event.preventDefault();
//el if es para que si no hay nada escrito no se agregue
    if (inputValue.trim().length <= 1) return;  
    onNewCategory(inputValue.trim());
     setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
       <input
         type='text'
         placeholder='Buscar gifs'
         value={inputValue} 
         onChange={ onInputChange }
       />
    </form>
  )
}


