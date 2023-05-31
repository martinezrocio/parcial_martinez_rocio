
import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Formulario from './Components/Formulario'

function App() {
  const[nombre, setNombre]=useState("nombre")
  const[color, setColor]=useState("color")
  const [show, setShow] = useState(false)
  const handleSubmit=(e) =>{
    e.preventDefault()
    if(nombre.length > 3){
      setShow(true)
    }
  }




  return (
      <>
        <h1>Elegi un color</h1>
        <Formulario setNombre={setNombre} setColor={setColor} handleSubmit={handleSubmit}/>
        {show && <Card nombre={nombre} color={color}/>}
     

      </>
     
 
  )
}

export default App
