import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
import styles from '../adminMedicoCrear/AdminMedicoCrear.module.css'
const AdminMedicoCrear = () => {
    const [nombreCompleto, setNombreCompleto] = useState()
    const [especialidad, setEspecialidad] = useState()
    const [horario1, setHorario1] = useState()
    const [horario2, setHorario2] = useState()
    const [horario3, setHorario3] = useState()
    const [horario4, setHorario4] = useState()
  
    const navigate = useNavigate()
const baseUrl='http://localhost:8080'

const {body,form,border,input,button,title,link}=styles

const handleSumit=(e)=>{
        e.preventDefault()
        if(nombreCompleto=== undefined || especialidad===undefined
            || horario1===undefined||horario2===undefined||horario3===undefined||horario4===undefined){
                alert("Todos los campos son obligatorios")
        }else{
            try {
              axios.post(`${baseUrl}/medico/crear`,{
                nombreCompleto:nombreCompleto,
                especialidad:especialidad,
                horario:[horario1,horario2,horario3,horario4]
              })
              .then((res)=>{
                console.log(res.data)
              navigate('/adminMedico')
              }
              )
            } catch (error) {
              console.log(error);
            }
        }}

  return (
  <div className={`m-0 conteiner-fluid d-flex  row ${body}`}>
    <div className='d-flex justify-content-start'>
      <Link to='/adminMedico' className={`btn  m-2 shadow d-flex justify-content-start ${link} ${button}`}> 🔙 volver</Link>
    </div>
  <div className={` m-3 p-2 conteiner-fluid`}>
      <h2 className={`d-flex justify-content-center ${title}`}>Crear nuevo</h2>
      <form className={` row d-flex justify-content-start ${form}`} onSubmit={handleSumit}>
      <div className={`d-flex justify-content-center row `}>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start ${title} `}>Nombre Completo</label>
              <input type="text" className={`form-control ${input} ${border} `} id="nombreCompleto" name='nombreCompleto' placeholder='Nombre completo' required 
              onChange={(e)=>setNombreCompleto(e.target.value)}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title}`}>Especialidad</label>
              <input type="text" className={`form-control ${input} ${border} `} id="nombre" name='especialidad' placeholder='Especialidad' required 
                onChange={(e)=>setEspecialidad(e.target.value)}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title}`}>Horario</label>
              <input type="text" className={`form-control ${input} ${border} `} id="horario" name='horario' placeholder='Dia/s y hora/s de consulta' required 
                onChange={(e)=>setHorario1(e.target.value)}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <input type="text" className={`form-control ${input} ${border} `} id="horario" name='horario' placeholder='Dia/s y hora/s de consulta' required 
                onChange={(e)=>setHorario2(e.target.value)}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <input type="text" className={`form-control ${input} ${border} `} id="horario" name='horario' placeholder='Dia/s y hora/s de consulta' required 
                onChange={(e)=>setHorario3(e.target.value)}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <input type="text" className={`form-control ${input} ${border} `} id="horario" name='horario' placeholder='Dia/s y hora/s de consulta' required 
                onChange={(e)=>setHorario4(e.target.value)}/>
          </div>
          <button type="submit" className={`btn mb-3 m-2 col-6 ${button} ${border}`}>Enviar</button>    
      </div>
      </form>
  </div>
  
</div>
  )
}

export default AdminMedicoCrear