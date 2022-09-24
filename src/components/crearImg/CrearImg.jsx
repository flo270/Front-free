import React from 'react'
import  { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link} from 'react-router-dom'
import styles from '../crearImg/CrearImg.module.css'

const CrearImg = () => {
    const [img, setImg] = useState()
    const [nombre, setNombre] = useState()
    const baseUrl ='http://localhost:8080'
  const {body,form,border,input,button,title,link,imge}=styles
  const navigate = useNavigate()
  const handleSumit=(e)=>{
    e.preventDefault()
    if(img=== undefined ||nombre=== undefined){
            alert("Todos los campos son obligatorios")
    }else{
        try {
          axios.post(`${process.env.REACT_APP_URL_BASE}/imagenes/crear`,{
           img:img,nombre:nombre
          })
          .then((res)=>{
            console.log('img',res.data)
          navigate('/adminImagenes')
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
      <h2 className={`d-flex justify-content-center ${title}`}>Crear nueva consulta</h2>
      <form className={` row d-flex justify-content-start ${form}`} onSubmit={handleSumit}>
      <div className={`d-flex justify-content-center row `}>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start ${title} ${imge} `}>
              <box-icon name='image'></box-icon>Url imagen</label>
              <input type="text" className={`form-control ${input} ${border} `} id="img" name='img' placeholder='Url imagen' required 
              onChange={(e)=>setImg(e.target.value)}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title} ${imge}`}>
              <box-icon name='pen'></box-icon>Nombre</label>
              <input type="text" className={`form-control ${input} ${border} `} id="nombre" name='nombre' placeholder=' Nombre' required 
                onChange={(e)=>setNombre(e.target.value)}/>
          </div>
          <button type="submit" className={`btn mb-3 m-2 col-6 ${button} ${border}`}>Enviar</button>    
      </div>
      </form>
  </div>
  
  </div>
  )
}

export default CrearImg