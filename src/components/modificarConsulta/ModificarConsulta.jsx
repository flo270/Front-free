import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link,useParams} from 'react-router-dom'
import styles from '../modificarConsulta/ModificarConsulta.module.css'
const ModificarConsulta = () => {
  const { _id } =useParams()
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
  
    const baseUrl ='https://backendconsultorio2-production.up.railway.app'
    const {body,form,border,input,button,title,link}=styles
  const getOneConsulta=()=>{
    axios.get(`${baseUrl}/consulta/${_id}`)
    .then(response=>{
      console.log(response.data.getIdConsulta)
      setPaciente(response.data.getIdConsulta.paciente)
      setFechaConsulta(response.data.getIdConsulta.fecha_consulta)
      setSintomas(response.data.getIdConsulta.sintomas)
      setDiagnostico(response.data.getIdConsulta.diagnostico)
      setTratamiento(response.data.getIdConsulta.tratamiento)
      setEstudios(response.data.getIdConsulta.estudios)
      setResultadoEst(response.data.getIdConsulta.resultadoEst)
      setMedico(response.data.getIdConsulta.medico)
    })
  }
  useEffect(() => {
    getOneConsulta()
  }, [])
  
    const handleSumit=(e)=>{
      e.preventDefault()
      if(paciente=== undefined ||fecha_consulta=== undefined ||sintomas ===undefined
          || diagnostico===undefined||tratamiento===undefined || estudios ===undefined
           || medico===undefined || resultadoEst===undefined){
              alert("Todos los campos son obligatorios")
      }else{
          try {
            axios.put(`${baseUrl}/consulta/${_id}`,{
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
              alert('estaseguro de realizar los cambios?')
            navigate('/consulta')
            }
            )
          } catch (error) {
            console.log(error);
          }
      }}

  const getAllMedicos=async()=>{
    const AllMedicos= await axios.get(`${baseUrl}/medico`)
    console.log(AllMedicos.data)
   setMedicos(AllMedicos.data)
  }
  useEffect(() => {
    getAllMedicos()
  }, [])
  const getAllPacientes=async()=>{
    const AllPacientes= await axios.get(`${baseUrl}/pac`)
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
      <h2 className={`d-flex justify-content-center ${title}`}>Modificar consulta</h2>
      <form className={` row d-flex justify-content-start ${form}`} onSubmit={handleSumit}>
      <div className={`d-flex justify-content-center row `}>
        <div className="mb-3 m-2 col-6">
          <label  className={`form-label d-flex justify-content-start  ${title}`}>Paciente</label>
          <select className={`form-select  ${input} ${border}`}  id="inputGroupSelect01"
           onChange={(e) => setPaciente(e.target.value)} value={paciente}>
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
              <label  className={`form-label d-flex justify-content-start ${title} `}>Fecha de consulta </label>
              <input type="text" className={`form-control ${input} ${border} `} id="fecha" name='fecha' placeholder='Fecha de consulta' required 
              onChange={(e)=>setFechaConsulta(e.target.value)} value={fecha_consulta}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title}`}>Sintomas</label>
              <input type="text" className={`form-control ${input} ${border} `} id="sintomas" name='sintomas' placeholder='Sintomas' required 
                onChange={(e)=>setSintomas(e.target.value)} value={sintomas}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title}`}>Diagnostico</label>
              <input type="text" className={`form-control ${input} ${border} `} id="diagnostico" name='diagnostico' placeholder='Diagnostico' required 
                onChange={(e)=>setDiagnostico(e.target.value)} value={diagnostico}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title}`}>Tratamiento</label>
              <input type="text" className={`form-control ${input} ${border} `} id="tratamiento" name='tratamiento' placeholder='Tratamiento' required 
                onChange={(e)=>setTratamiento(e.target.value)} value={tratamiento}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title}`}>Estudios</label>
              <input type="text" className={`form-control ${input} ${border} `} id="estudios" name='estudios' placeholder='Estudios' required 
                onChange={(e)=>setEstudios(e.target.value)} value={estudios}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title}`}>Resultados Estudios</label>
              <input type="text" className={`form-control ${input} ${border} `} id="res-estudios" name='resestudios' placeholder='Resultados Estudios' required 
                onChange={(e)=>setResultadoEst(e.target.value)} value={resultadoEst}/>
          </div>
         <div className="mb-3 m-2 col-6">
          <label  className={`form-label d-flex justify-content-start  ${title}`}>Seleccione medico</label>
          <select className={`form-select  ${input} ${border}`}  id="inputGroupSelect01"
           onChange={(e) => setMedico(e.target.value)} value={medico}>
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

export default ModificarConsulta