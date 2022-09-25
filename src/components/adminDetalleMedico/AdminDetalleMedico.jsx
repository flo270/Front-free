import React,{useState, useEffect} from 'react'
import { useParams,useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'
import axios from 'axios'
import styles from '../adminDetalleMedico/AdminDetalle.module.css'
const AdminDetalleMedico = () => {
  const {body,form,border,input,button,title,link}=styles
  const { _id } = useParams()
  const [nombreCompleto, setNombreCompleto] = useState()
  const [especialidad, setEspecialidad] = useState()
  const [horario1, setHorario1] = useState()
  const [horario2, setHorario2] = useState()
  const [horario3, setHorario3] = useState()
  const [horario4, setHorario4] = useState()

  const navigate = useNavigate()

  const baseUrl ='https://backendconsultorio2-production.up.railway.app'

const getByIdOneMed=()=>{
  axios.get(`${ baseUrl}/medico/${_id}`)
  .then(response=>{
    console.log(response.data.getIdMedico)
    setNombreCompleto(response.data.getIdMedico.nombreCompleto)
    setEspecialidad(response.data.getIdMedico.especialidad)
    setHorario1(response.data.horario1)
    setHorario2(response.data.horario2)
    setHorario3(response.data.horario3)
    setHorario4(response.data.horario4)
  })
}
 
useEffect(()=>{
  getByIdOneMed()
},[])

const handleSumit=(e)=>{
      e.preventDefault()
      if(nombreCompleto=== undefined || especialidad===undefined
          ||horario1===undefined ||horario2===undefined ||horario3===undefined ||horario4===undefined){
              alert("Todos los campos son obligatorios")
      }else{
          try {
            axios.put(`${ baseUrl}/medico/${_id}`,{
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
    <Link to='/adminMedico' className={` m-3 btn shadow d-flex justify-content-start ${link} ${button}`}> 🔙 volver</Link>
  </div>
 
<div className={` m-3 p-2 conteiner-fluid`}>
    <h2 className={`d-flex justify-content-center ${title}`}>Modificar Medico</h2>
    <form className={ `row d-flex justify-content-start m-1 ${form}`} onSubmit={handleSumit}>
    <div className={`d-flex justify-content-center row`}>
        <div className="mb-3 m-2 col-6">
            <label  className={`form-label d-flex justify-content-start  ${title}`}>Nombre Completo</label>
            <input type="text" className={`form-control ${input} ${border}`} id="nombreCompleto" name='nombreCompleto' placeholder='Nombre completo' required 
            onChange={(e)=>setNombreCompleto(e.target.value)} value={nombreCompleto}/>
        </div>
        <div className="mb-3 m-2 col-6">
            <label  className={`form-label d-flex justify-content-start  ${title}`}>Especialidad</label>
            <input type="text" className={`form-control ${input} ${border}`} id="nombre" name='especialidad' placeholder='Especialidad' required 
              onChange={(e)=>setEspecialidad(e.target.value)} value={especialidad}/>
        </div>
        <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title}`}>Horario</label>
              <input type="text" className={`form-control ${input} ${border}`} id="horario" name='horario' placeholder='Dia/s y hora/s de consulta' required 
                onChange={(e)=>setHorario1(e.target.value)} value={horario1}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <input type="text" className={`form-control ${input} ${border}`} id="horario" name='horario' placeholder='Dia/s y hora/s de consulta' required 
                onChange={(e)=>setHorario2(e.target.value)} value={horario2}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <input type="text" className={`form-control ${input} ${border}`} id="horario" name='horario' placeholder='Dia/s y hora/s de consulta' required 
                onChange={(e)=>setHorario3(e.target.value)} value={horario3}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <input type="text" className={`form-control ${input} ${border}`} id="horario" name='horario' placeholder='Dia/s y hora/s de consulta' required 
                onChange={(e)=>setHorario4(e.target.value)} value={horario4}/>
          </div>
        <button type="submit" className={`btn  mb-3 m-2 col-6 ${button} ${border}`}>Enviar</button>    
    </div>
    </form>
</div>

</div>
  )
}

export default AdminDetalleMedico