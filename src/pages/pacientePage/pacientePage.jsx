import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styles from '../pacientePage/paciente.module.css'
import TablaPaciente from '../../components/tablaPaciente/TablaPaciente'

const PacientePage = () => {
    const {body,table,border,title,button,input,inputBorder}=styles
    const [paciente, setPaciente] = useState([])
    const [pacienteAux,setPacienteAux]=useState()
  
    const navigate=useNavigate()
    const baseUrl= "http://localhost:8080";

    const getAllMPacientes=()=>{
        axios.get(`${baseUrl}/pac`)
        .then(response=>{
          setPaciente(response.data.paciente)
          setPacienteAux(response.data.paciente) 
        })
      }
      useEffect(() => {
        getAllMPacientes()  
        }, []) 
      
const handleChange=(e)=>{
  if (e.length >= 3) {
  const filterPaciente = pacienteAux.filter((pac)=>{
    if (pac.apellido.toLowerCase().indexOf(e.toLowerCase())!==-1 || pac.nombre.toLowerCase().indexOf(e.toLowerCase())!==-1
        ||pac.dni.toString().indexOf(e.toLowerCase())!==-1) {
      return pac
     }
     })
       setPaciente(filterPaciente)
     }else{
     getAllMPacientes()
      }
}


  return (
    <div className={`container-fluid ${body}`}>
    <h1 className={`${title}`}>Panel de administracion de Pacientes</h1>
    <div class="mb-3">
        <label  className={`form-label `}>Buscar por Apellido / DNI / Nombre</label>
        <input type="text" className={`form-control ${input} ${inputBorder}`} onChange={(e) => handleChange(e.target.value)} id="exampleFormControlInput1"/>
    </div>
    <div>
    </div>
    <div className= " row mt-5 justify-content-center">
    {<div>
        <button className={`btn d-flex justify-contect-start ${button} ${border} m-2`}onClick={()=>navigate('/crearPaciente')}>
            Crear nuevo</button>
        <div className='row'>
          <div>
          <table  className={`table table-hover table-responsive ${table} ${border} mx-auto`}>
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Fecha de nacimiento</th>
                <th scope="col">DNI</th>
                <th scope="col">sexo</th>
                <th scope="col">Telefono</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {
              paciente.map((pacientes)=>(
               <TablaPaciente pacientes={pacientes} key={pacientes._id}/>
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

export default PacientePage;