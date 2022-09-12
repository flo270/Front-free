import React,{useState} from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
import styles from '../crearpaciente/CrearPaciente.module.css'
const CrearPaciente = () => {
    const [nombre, setNombre] = useState()
    const [apellido, setApellido] = useState()
    const [fecha_nacimiento, setFechaNac] = useState()
    const [dni, setDni] = useState()
    const [sexo, setSexo] = useState()
    const [telefono, setTelefono] = useState()
    const [num_hc, setNum_hc] = useState()

    const navigate =useNavigate()

    const baseUrl ='http://localhost:8080'
    const {body,form,border,input,button,title,link}=styles

    const handleSumit=(e)=>{
        e.preventDefault()
        if(nombre=== undefined ||apellido=== undefined || fecha_nacimiento===undefined
            || sexo===undefined||telefono===undefined || dni ===undefined ||num_hc===undefined){
                alert("Todos los campos son obligatorios")
        }else{
            try {
              axios.post(`${baseUrl}/pac/crear`,{
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
      <h2 className={`d-flex justify-content-center ${title}`}>Crear nuevo</h2>
      <form className={` row d-flex justify-content-start ${form}`} onSubmit={handleSumit}>
      <div className={`d-flex justify-content-center row `}>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start ${title} `}>Nombre </label>
              <input type="text" className={`form-control ${input} ${border} `} id="nombre" name='nombre' placeholder='Nombre' required 
              onChange={(e)=>setNombre(e.target.value)}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title}`}>Apellido</label>
              <input type="text" className={`form-control ${input} ${border} `} id="apellido" name='apellido' placeholder='Apellido' required 
                onChange={(e)=>setApellido(e.target.value)}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title}`}>Fecha de nacimiento</label>
              <input type="text" className={`form-control ${input} ${border} `} id="fecha" name='fecha' placeholder='Fecha de nacimiento' required 
                onChange={(e)=>setFechaNac(e.target.value)}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title}`}>DNI</label>
              <input type="number" className={`form-control ${input} ${border} `} id="dni" name='dni' placeholder='DNI' required 
                onChange={(e)=>setDni(e.target.value)}/>
          </div>
          <div className="mb-3 m-2 col-6">
          <label  className={`form-label d-flex justify-content-start  ${title}`}>Sexo</label>
             
                 <select class={`form-select ${input} ${border}`} aria-label="Default select example"  onChange={(e)=>setSexo(e.target.value)}>
                     <option selected>Slecione una opcion</option>
                     <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Otro">Otro</option>
                </select>
          </div>
         
          <div className="mb-3 m-2 col-6">
          <label  className={`form-label d-flex justify-content-start  ${title}`}>Telefono</label>
              <input type="text" className={`form-control ${input} ${border} `} id=" tel" name='tel' placeholder='Telefono' required 
                onChange={(e)=>setTelefono(e.target.value)}/>
          </div>
          <div className="mb-3 m-2 col-6">
          <label  className={`form-label d-flex justify-content-start  ${title}`}>n° HC</label>
              <input type="text" className={`form-control ${input} ${border} `} id="num_hc" name='num_hc' placeholder='Numero de HC' required 
                onChange={(e)=>setNum_hc(e.target.value)}/>
          </div>
          <button type="submit" className={`btn mb-3 m-2 col-6 ${button} ${border}`}>Enviar</button>    
      </div>
      </form>
  </div>
  
  </div>
  )
}

export default CrearPaciente