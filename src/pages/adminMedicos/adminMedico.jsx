import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../adminMedicos/adminmedico.module.css'
import TablaMedico from '../../components/tablaMedico/TablaMedico'
const AdminMedico = () => {
const {body,table,border,input,button,title}=styles
const [medico, setMedico] = useState([{
 
}])
const [medicoAux, setMedicoAux] = useState()


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
  }, []) 

 
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
    <div className="mb-3">
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
              medico.map((medicos)=>(
               <TablaMedico medicos={medicos} key={medicos._id}/>
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