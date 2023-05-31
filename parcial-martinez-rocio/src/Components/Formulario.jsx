import React from 'react'

const Formulario = ({setNombre, setColor,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre del usuario</label>
      <input type="text" onChange={(e) => setNombre(e.target.value)}/>
      <label>Elija un color</label>
      <input type="text" onChange={(e) => setColor(e.target.value)}/>
      <button>Enviar</button>
      
    
    </form>
  )
}

export default Formulario