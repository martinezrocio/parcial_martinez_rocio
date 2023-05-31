import React from 'react'

const Card = ({nombre,color}) => {
  const estilo = {
    backgroundColor: 'white',
    color: 'black',
    fontSize: '16px',
    fontWeight: 'bold',
  }

  return (
    <div style={estilo}>
       <h2 className=''>Hola {nombre} tu color favorito es {color}</h2>

    </div>
  )
}

export default Card