import React from 'react'
import axios from 'axios'
import SubmitButton from '../submitButton/SubmitButton'

import styles from '../infoes/InfoesTabla.module.css'
import { useNavigate } from 'react-router-dom'

const infoesTabla = ({infoes}) => {
  
    const {titulo,cuerpo,_id,fav} = infoes
    const baseUrl ='https://backendconsultorio2-production.up.railway.app'
  const navigate = useNavigate()
    const {border,button,buttonDelete}=styles

const modificarInfo=(_id)=>{
        console.log(_id)
        if (_id!=null){   
         navigate(`/detalleInfo/${_id}`)
        }else{
          alert('Hubo un error para acceder al detalle de medico')
    }}
const borrarInfo=(_id)=>{
          console.log(_id)
          if (window.confirm("¿Estas seguro de borrar el registro?")){
            axios.delete(`${baseUrl}/info/${_id}`)
            .then(response=>{
              if (response.status===201) {
                window.location.reload()
                alert('EXITO AL ELIMIAR EL REGISTRO')
              }else{
                alert('ALGO SALIO MAL Y EL REGISTRO PERSISTE')
              }
            })  
          } else {
            alert('HUBO UN PROBLEMA Y EL REGISTRO NO SE ELIMINO, ERROR')
            
} }
const addFavorite = () => {
            try{
               axios.put(`${baseUrl}/info/${_id}`,{
                 titulo:titulo,
                 cuerpo:cuerpo,
                 fav: true
               })
               .then((res)=>{
                   console.log(res.data.Infoes)
                 window.location.reload()
                })
            } catch(error){
             console.log(error)
            }
}
               
const removeFavorite = () => {
        try{
            axios.put(`${process.env.REACT_APP_URL_BASE}/info/${_id}`,{
                titulo:titulo,
                cuerpo:cuerpo,
              fav: false
            })
           .then((res)=>{
               console.log(res.data.infoes)
              window.location.reload()
            })
       } catch(error){
         console.log(error)
        }
}
      
  return (
    <tr>
    <td>{`${titulo}`}</td>
    <td>{`${cuerpo}`}</td>
    <td>
   <button className={`btn mx-2 ${button} ${border}`} onClick={()=>{modificarInfo(_id)}}>Modificar </button>
    <button className={`btn shadow ${buttonDelete}`} onClick={()=>{borrarInfo(_id)}}>Eliminar</button>
    {fav ? <SubmitButton mensage={"Out fav"} handlerClick={removeFavorite} /> : 
     <SubmitButton mensage={"Add fav"}  handlerClick={addFavorite} />}
    </td>
    
  </tr>
  )
}

export default infoesTabla