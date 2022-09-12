import React from 'react'
import {useNavigate} from 'react-router-dom'
// axios from 'axios'
import styles from '../tablaPaciente/TablaPaciente.module.css'
const TablaPaciente = ({pacientes}) => {
    const {nombre,apellido,fecha_nacimiento,dni, sexo,telefono,num_hc}= pacientes
    const navigate=useNavigate()
   // const baseUrl= "http://localhost:8080";

    const {button,input,border}=styles
const modificarPacientes=(_id)=>{
        console.log(_id)
        if (_id!=null){   
            navigate(`/detallePaciente/${_id}`)
        }else{
          alert('Hubo un error para acceder al registro de paciente')
            
        }}
/* const borrarPacientes=(_id)=>{
        console.log(_id)
        if (window.confirm("¿Estas seguro de borrar el registro de paciente?")){
          axios.delete(`${baseUrl}/pac/${_id}`)
          .then(response=>{
            if (response.status===201) {
              alert('EXITO AL ELIMIAR EL REGISTRO')
            }else{
             alert('ALGO SALIO MAL Y EL REGISTRO PERSISTE')
           }
         })  
            } else {
          alert('HUBO UN PROBLEMA Y EL REGISTRO NO SE ELIMINO, ERROR')        
         } } */
 /* const CrearConsultaNueva=(_id)=>{
console.log('paciente id:',_id)
 } */
    return (

     <tr >
         <td className={`${input}`}>{nombre}</td>
         <td className={`${input}`}>{apellido}</td>
         <td className={`${input}`}>{fecha_nacimiento}</td>
         <td className={`${input}`}>{dni}</td>
         <td className={`${input}`}>{sexo}</td>
        <td className={`${input}`}>{telefono}</td>
        <td className={`${input}`}>{num_hc}</td>
        <td className={`${input}`}>
             <button className={`btn mx-2 ${button} ${border}`} onClick={()=>{modificarPacientes(pacientes._id)}}>Modificar </button>
         {/*  <button className={`btn shadow  ${buttonDelete}`} onClick={()=>{borrarPacientes(pacientes._id)}}>Eliminar</button> */}
         {/*   <button className={`btn mx-2 ${button} ${border}`} onClick={()=>{CrearConsultaNueva(pacientes._id)}}>Crear consulta nueva</button>*/}
         </td>
         </tr>
  )
}

export default TablaPaciente