import axios from 'axios'
import React from 'react'
import styles from '../tablaMedico/TablaMedico.module.css'
import { useNavigate } from 'react-router-dom'
import SubmitButton from '../../components/submitButton/SubmitButton'

const TablaMedico = ({medicos}) => {
    const { _id,nombreCompleto,especialidad,horario,fav}=medicos
    const {border,input,button,buttonDelete}=styles
    const navigate=useNavigate()
const baseUrl= "https://backendconsultorio2-production.up.railway.app";
    const modificarMedico=(_id)=>{
        console.log(_id)
        if (_id!=null){   
          navigate(`/detalle/${_id}`)
        }else{
          alert('Hubo un error para acceder al detalle de medico')
        
        }}
        const borrarMedico=(_id)=>{
          console.log(_id)
          if (window.confirm("¿Estas seguro de borrar el registro de medico?")){
            axios.delete(`${baseUrl}/medico/${_id}`)
            .then(response=>{
              if (response.status===201) {
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
               axios.put(`${baseUrl}/medico/${_id}`,{
                 nombreCompleto:nombreCompleto,
                 especialidad:especialidad,
                 horario:horario,
                 fav: true
               })
               .then((res)=>{
                   console.log(res.data)
                 window.location.reload()
                })
            } catch(error){
             console.log(error)
            }
           }
               
       const removeFavorite = () => {
        try{
            axios.put(`${process.env.REACT_APP_URL_BASE}/medico/${_id}`,{
              nombreCompleto:nombreCompleto,
              especialidad:especialidad,
              horario:horario,
              fav: false
            })
           .then((res)=>{
               console.log(res.data)
              window.location.reload()
            })
       } catch(error){
         console.log(error)
        }
       }
            
  return (
    <tr>
                <td className={`${input}`}>{medicos.nombreCompleto}</td>
                <td className={`${input}`}>{medicos.especialidad}</td>
                <td className={`${input}`}>{medicos.horario}</td>
                <td className={`${input}`}>
                  <button className={`btn mx-2 ${button} ${border}`} onClick={()=>{modificarMedico(medicos._id)}}>Modificar </button>
                  <button className={`btn shadow ${buttonDelete}`} onClick={()=>{borrarMedico(medicos._id)}}>Eliminar</button>
                  {fav ? <SubmitButton mensage={"Out fav"} handlerClick={removeFavorite} /> : 
                   <SubmitButton mensage={"Add fav"}  handlerClick={addFavorite} />}
                </td>
                </tr>
  )
}

export default TablaMedico