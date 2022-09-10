import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../adminMedicos/adminmedico.module.css'
const AdminMedico = () => {
const {body,table,border,input,button,title,buttonDelete}=styles
const [medico, setMedico] = useState([{
  _id:"",nombreCompleto:"",especialidad:"",horario:""
}])
const [medicoAux, setMedicoAux] = useState()
const [flag, setFlag] = useState(false)

const navigate=useNavigate()
const baseUrl= "http://localhost:8080";

const getAllMedicos=()=>{
  axios.get(`${baseUrl}/medico`)
  .then(response=>{
    console.log(response.data)
    setMedico(response.data)
    setMedicoAux(response.data)
  })
}
useEffect(() => {
  getAllMedicos()  
  }, [flag]) 

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
        setFlag(!flag)
        if (response.status===201) {
          alert('EXITO AL ELIMIAR EL REGISTRO')
        }else{
          alert('ALGO SALIO MAL Y EL REGISTRO PERSISTE')
        }
      })  
    } else {
      alert('HUBO UN PROBLEMA Y EL REGISTRO NO SE ELIMINO, ERROR')
      
    } }

  const handleChange=(e)=>{
    if (e.length >= 3) {
    const filterMedicos = medicoAux.filter((med)=>{
      if (med.nombreCompleto.toLowerCase().indexOf(e.toLowerCase())!==-1
           ||med.especialidad.toLowerCase().indexOf(e.toLowerCase())!==-1) {
         return med
        }
        })
         setMedico(filterMedicos)
       }else{
        getAllMedicos()
        }
    }

  return (
  <div className={`container-fluid ${body}`}>
    <h1 className={`${title}`}>Panel de administracion de medico</h1>
    <div class="mb-3">
        <label  className={`form-label `}>Buscar por nombre completo /especialidad</label>
        <input type="text" className={`form-control ${input} ${border}`} onChange={(e) => handleChange(e.target.value)} id="exampleFormControlInput1"/>
    </div>
    <div className= " row mt-5 justify-content-center">
    {<div>
        <button className={`btn d-flex justify-contect-start ${button} ${border} m-2`}onClick={()=>navigate('/crearMedico')}>
            Crear nuevo</button>
        <div className='row'>
          <div>
          <table  className={`table table-hover table-responsive ${table} ${border} mx-auto`}>
            <thead>
              <tr>
                <th scope="col">Nombre Completo</th>
                <th scope="col">Especialidad</th>
                <th scope="col">Horario</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {
              medico.map((medicos,i)=>(
                <tr key= {i}>
                <td className={`${input}`}>{medicos.nombreCompleto}</td>
                <td className={`${input}`}>{medicos.especialidad}</td>
                <td className={`${input}`}>{medicos.horario}</td>
                <td className={`${input}`}>
                  <button className={`btn mx-2 ${button} ${border}`} onClick={()=>{modificarMedico(medicos._id)}}>Modificar </button>
                  <button className={`btn shadow ${buttonDelete}`} onClick={()=>{borrarMedico(medicos._id)}}>Eliminar</button>
                </td>
                </tr>
                ))
              }  
            </tbody>
          </table>
          </div>
        </div>
      </div> 
      } 
    </div>        
  </div>
  )
}

export default AdminMedico