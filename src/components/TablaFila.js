import React from 'react'
import Button from 'react-bootstrap/Button';

function TablaFila({elem, obtenerTareas, eliminarTarea, editarTarea}) {
  return (
    
<tr align="center">
            <td>{elem.cityR}</td>
            <td>{elem.dirR}</td>
            <td>{elem.nameR}</td>
            <td>{elem.tipoP}</td>
            <td>{elem.cityD}</td>
            <td>{elem.dirD}</td>
            <td>{elem.nameD}</td>
            <td>{elem.celD}</td>
            
            


            
            <td align="center">
            <Button  onClick={() => editarTarea(elem._id)} variant="primary"  type="submit" size="sm">
             Editar
            </Button>

            {" "}
            
            <Button  onClick={() => eliminarTarea(elem._id)}  variant="danger" type="submit" size="sm">
             Eliminar
            </Button>
            </td>
          </tr>




  )
}

export default TablaFila