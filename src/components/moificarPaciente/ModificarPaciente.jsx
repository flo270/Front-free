import React,{useState, useEffect} from 'react'
import { useParams,useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'
import axios from 'axios'
import styles from '../moificarPaciente/ModificarPaciente.module.css'
const ModificarPaciente = () => {
    const { _id } = useParams()
    const [nombre, setNombre] = useState()
    const [apellido, setApellido] = useState()
    const [fecha_nacimiento, setFechaNac] = useState()
    const [dni, setDni] = useState()
    const [sexo, setSexo] = useState()
    const [telefono, setTelefono] = useState()
const [num_hc, setNum_hc] = useState()
    const navigate =useNavigate()

    const baseUrl ='https://backendconsultorio2-production.up.railway.app'
    const {body,form,border,input,button,title,link}=styles
 const getOnePaciente= ()=>{
    axios.get(`${process.env.REACT_APP_URL_BASE}/pac/${_id}`)
    .then(response=>{
         console.log(response.data.getIdPaciente)
         setNombre(response.data.getIdPaciente.nombre)
         setApellido(response.data.getIdPaciente.apellido)
         setFechaNac(response.data.getIdPaciente.fecha_nacimiento)
         setDni(response.data.getIdPaciente.dni)
         setSexo(response.data.getIdPaciente.sexo)
         setTelefono(response.data.getIdPaciente.telefono)
         setNum_hc(response.data.getIdPaciente.num_hc)
    }) 
 }
 useEffect(() => {
   getOnePaciente()
 }, [])
 
    const handleSumit=(e)=>{
        e.preventDefault()
        if(nombre=== undefined ||apellido=== undefined || fecha_nacimiento===undefined
            || sexo===undefined||telefono===undefined || dni ===undefined || num_hc===undefined){
                alert("Todos los campos son obligatorios")
        }else{
            try {
              axios.put(`${process.env.REACT_APP_URL_BASE}/pac/${_id}`,{
                nombre:nombre,
                apellido:apellido,
                fecha_nacimiento:fecha_nacimiento,
                dni:dni,
                sexo:sexo,
                telefono:telefono,
                num_hc:num_hc
              })
              .then((res)=>{
                console.log(res.data)
              navigate('/paciente')
              }
              )
            } catch (error) {
              console.log(error);
            }
        }}
  return (
    <div className={`m-0 conteiner-fluid d-flex  row ${body}`}>
        <div className='d-flex justify-content-start'>
        <Link to='/paciente' className={`btn  m-2 shadow d-flex justify-content-start ${link} ${button}`}> 🔙 volver</Link>
         </div>
        <div className={` m-3 p-2 conteiner-fluid`}>
      <h2 className={`d-flex justify-content-center ${title}`}>Modificar Paciente</h2>
        <form className={` row d-flex justify-content-start ${form}`} onSubmit={handleSumit}>
        <div className={`d-flex justify-content-center row `}>
            <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start ${title} `}>Nombre </label>
              <input type="text" className={`form-control ${input} ${border} `} id="nombre" name='nombre' placeholder='Nombre' required 
              onChange={(e)=>setNombre(e.target.value)} value={nombre}/>
            </div>
            <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title}`}>Apellido</label>
              <input type="text" className={`form-control ${input} ${border} `} id="apellido" name='apellido' placeholder='Apellido' required 
                onChange={(e)=>setApellido(e.target.value)} value={apellido}/>
             </div>
            <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title}`}>Fecha de nacimiento</label>
              <input type="text" className={`form-control ${input} ${border} `} id="fecha" name='fecha' placeholder='Fecha de nacimiento' required 
                onChange={(e)=>setFechaNac(e.target.value)} value={fecha_nacimiento}/>
            </div>
             <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title}`}>DNI</label>
              <input type="number" className={`form-control ${input} ${border} `} id="dni" name='dni' placeholder='DNI' required 
                onChange={(e)=>setDni(e.target.value)} value={dni}/>
             </div>
             <div className="mb-3 m-2 col-6">
             <label  className={`form-label d-flex justify-content-start  ${title}`}>Sexo</label>
             
                 <select class={`form-select ${input} ${border}`} aria-label="Default select example"  onChange={(e)=>setSexo(e.target.value)} value={sexo}>
                     <option selected>Slecione una opcion</option>
                     <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Otro">Otro</option>
                </select>
             </div>
         
             <div className="mb-3 m-2 col-6">
             <label  className={`form-label d-flex justify-content-start  ${title}`}>Telefono</label>
              <input type="number" className={`form-control ${input} ${border} `} id="horario" name='horario' placeholder='Telefono' required 
                onChange={(e)=>setTelefono(e.target.value)} value={telefono}/>
             </div>
             <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title}`}>n° HC</label>
              <input type="text" className={`form-control ${input} ${border} `} id="num_hc" name='num_hc' placeholder='Numero de HC' required 
                onChange={(e)=>setNum_hc(e.target.value)} value={num_hc}/>
             </div>
            <button type="submit" className={`btn mb-3 m-2 col-6 ${button} ${border}`}>Enviar</button>    
      </div>
      </form>
  </div>
  
    </div>
  )
}

export default ModificarPaciente