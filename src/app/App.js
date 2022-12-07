import React, {useState, useEffect} from 'react'
import Barranav from '../components/Barranav'
import Formulario from '../components/Formulario'
import Login from '../components/Login'


function App() {

  const [db, setDb] = useState([])
  useEffect(() => {
    obtenerTareas()
  }, [])

  function obtenerTareas() {
    fetch("/api/task")
        .then(res => res.json())

        .then(data => {
          console.log(data)
          console.log("Componente montado")
          setDb(data)
        })

        .catch(error => console.log(error))
  }
  

  function eliminarTarea(id) {
    if(confirm("¿Esta seguro de eliminar la tarea?")){
      fetch(`/api/task/${id}`, {
        method: "DELETE", 
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log({data})
        alert("Tarea eliminada")
      });
    }
    obtenerTareas()
  }


  


  return (
    <>

  {/* <br/>
   <br/>
   <br/>
   <br/>
   <Login/> */}
   
   <Barranav/>
   <br/>
   <Formulario db={db} obtenerTareas={obtenerTareas} eliminarTarea={eliminarTarea}/>
   <br/>
   <br/>
   <br/>
   <br/> 
    </>
  )
}

export default App