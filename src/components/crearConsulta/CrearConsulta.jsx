import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link} from 'react-router-dom'
import styles from '../crearConsulta/CrearConsulta.module.css'

const CrearConsulta = () => {
  const [paciente, setPaciente] = useState()
  const [pacientes, setPacientes] = useState()
  const [fecha_consulta, setFechaConsulta] = useState()
  const [sintomas, setSintomas] = useState()
  const [diagnostico, setDiagnostico] = useState()
  const [tratamiento, setTratamiento] = useState()
  const [estudios, setEstudios] = useState()
  const [resultadoEst, setResultadoEst] = useState()
  const [medico, setMedico] = useState()
  const [medicos, setMedicos] = useState()
  const navigate =useNavigate()

  const baseUrl ='http://localhost:8080'
  const {body,form,border,input,button,title,link,img}=styles

  const handleSumit=(e)=>{
      e.preventDefault()
      if(paciente=== undefined ||fecha_consulta=== undefined ||sintomas ===undefined
          || diagnostico===undefined||tratamiento===undefined || estudios ===undefined
           || medico===undefined ||resultadoEst===undefined){
              alert("Todos los campos son obligatorios")
      }else{
          try {
            axios.post(`${baseUrl}/consulta/crear`,{
             paciente:paciente,
             fecha_consulta:fecha_consulta,
             sintomas:sintomas,
             diagnostico:diagnostico,
             tratamiento:tratamiento,
             estudios:estudios,
             resultadoEst:resultadoEst,
             medico:medico
            })
            .then((res)=>{
              console.log('consulta',res.data)
            navigate('/consulta')
            }
            )
          } catch (error) {
            console.log(error);
          }
      }}

  const getAllMedicos=async()=>{
    const AllMedicos= await axios.get(`${process.env.REACT_APP_URL_BASE}/medico`)
    console.log(AllMedicos.data)
   setMedicos(AllMedicos.data)
  }
  useEffect(() => {
    getAllMedicos()
  }, [])
  const getAllPacientes=async()=>{
    const AllPacientes= await axios.get(`${process.env.REACT_APP_URL_BASE}/pac`)
    console.log(AllPacientes.data.paciente)
   setPacientes(AllPacientes.data.paciente)
  }
  useEffect(() => {
    getAllPacientes()
  }, [])

  return (
    <div className={`m-0 conteiner-fluid d-flex  row ${body}`}>
    <div className='d-flex justify-content-start'>
      <Link to='/paciente' className={`btn  m-2 shadow d-flex justify-content-start ${link} ${button}`}> 🔙 volver</Link>
    </div>
  <div className={` m-3 p-2 conteiner-fluid`}>
      <h2 className={`d-flex justify-content-center ${title}`}>Crear nueva consulta</h2>
      <form className={` row d-flex justify-content-start ${form}`} onSubmit={handleSumit}>
      <div className={`d-flex justify-content-center row `}>
        <div className="mb-3 m-2 col-6">
          <label  className={`form-label d-flex justify-content-start  ${title} ${img}`}>
          <box-icon type='solid' name='user'></box-icon>Paciente</label>
          <select className={`form-select  ${input} ${border}`}  id="inputGroupSelect01"
           onChange={(e) => setPaciente(e.target.value)}>
              <option>Seleccione paciente</option>
              {pacientes &&
                pacientes.map((paciente) => {
                  return (
                    <option key={paciente._id} value={paciente._id}>
                      {paciente.dni}{' '}
                      {paciente.apellido}{' '}
                      {paciente.nombre}
                    </option>
                  );
                })}
            </select>
        </div> 
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start ${title} ${img}`}>Fecha de consulta </label>
              <input type="text" className={`form-control ${input} ${border} `} id="fecha" name='fecha' placeholder='Fecha de consulta' required 
              onChange={(e)=>setFechaConsulta(e.target.value)}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title} ${img}`}>
              <box-icon type='solid' name='virus'></box-icon>Sintomas</label>
              <input type="text" className={`form-control ${input} ${border} `} id="sintomas" name='sintomas' placeholder='Sintomas' required 
                onChange={(e)=>setSintomas(e.target.value)}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title} ${img}`}>
              <box-icon type='solid' name='thermometer'></box-icon>Diagnostico</label>
              <input type="text" className={`form-control ${input} ${border} `} id="diagnostico" name='diagnostico' placeholder='Diagnostico' required 
                onChange={(e)=>setDiagnostico(e.target.value)}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title} ${img}`}>
              <box-icon name='virus-block' type='solid' ></box-icon>Tratamiento</label>
              <input type="text" className={`form-control ${input} ${border} `} id="tratamiento" name='tratamiento' placeholder='Tratamiento' required 
                onChange={(e)=>setTratamiento(e.target.value)}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title} ${img}`}>
              <box-icon name='capsule'></box-icon>Estudios</label>
              <input type="text" className={`form-control ${input} ${border} `} id="estudios" name='estudios' placeholder='Estudios' required 
                onChange={(e)=>setEstudios(e.target.value)}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title} ${img}`}>
              <box-icon name='band-aid'></box-icon>Resultados Estudios</label>
              <input type="text" className={`form-control ${input} ${border} `} id="res-estudios" name='resestudios' placeholder='Resultados Estudios' required 
                onChange={(e)=>setResultadoEst(e.target.value)}/>
          </div>
         <div className="mb-3 m-2 col-6">
          <label  className={`form-label d-flex justify-content-start  ${title} ${img}`}>
          <box-icon name='donate-blood'></box-icon>Seleccione medico</label>
          <select className={`form-select  ${input} ${border}`}  id="inputGroupSelect01"
           onChange={(e) => setMedico(e.target.value)}>
              <option>Seleccione medico</option>
              {medicos &&
                medicos.map((medico) => {
                  return (
                    <option key={medico._id} value={medico._id}>
                      {medico.nombreCompleto}
                      {medico.especialidad}
                    </option>
                  );
                })}
            </select>
          </div>
          <button type="submit" className={`btn mb-3 m-2 col-6 ${button} ${border}`}>Enviar</button>    
      </div>
      </form>
  </div>
  
  </div>
  )
}

export default CrearConsulta