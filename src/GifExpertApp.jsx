import React from 'react'
import { useState } from 'react'
import {AddCategory, GifGrid}  from './components'


const GifExpertApp = () => {
  //estado de categorias
  const [categories, setCategories] = useState(['One Punch'])

//funcion para agregar categorias
  const onAddCategory = ( newCategory ) => {
//si la categoria ya existe no se agrega   
    if (categories.includes(newCategory)) return;
//si la categoria no existe se agrega
     setCategories([ newCategory, ...categories ])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        onNewCategory={ onAddCategory }
      />
    
      {
      categories.map(category => (
        <GifGrid key={category} category={category}/>
      ))
      }
  
    </>
  )
}

export default GifExpertApp

