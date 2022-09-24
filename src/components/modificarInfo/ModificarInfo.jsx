import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams,useNavigate, Link } from 'react-router-dom'
import styles from '../modificarInfo/MOdificarInfo.module.css'

const ModificarInfo = () => {
  const {_id}=useParams()

  const [titulo, setTitulo] = useState()
  const [cuerpo, setCuerpo] = useState()

  const navigate = useNavigate()

  const {body,form,border,input,button,title,link}=styles

  const baseUrl='https://backendconsultorio2-production.up.railway.app'

  const getOne=()=>{
    axios.get(`${process.env.REACT_APP_URL_BASE}/info/${_id}`)
    .then(response=>{
      console.log(response.data.getId)
     setTitulo(response.data.getId.titulo)
     setCuerpo(response.data.getId.cuerpo)
    })
  }

  useEffect(() => {
    getOne()
  }, [])

  const handleSumit=(e)=>{
    e.preventDefault()
    if(titulo=== undefined ||cuerpo=== undefined ){
            alert("Todos los campos son obligatorios")
    }else{
        try {
          axios.put(`${process.env.REACT_APP_URL_BASE}/info/${_id}`,{
          titulo:titulo,
          cuerpo:cuerpo
          })
          .then((res)=>{
            console.log(res.data)
            alert('Esta seguro de realizar los cambios?')
          navigate('/admin')
          }
          )
        } catch (error) {
          console.log(error);
        }
    }}
  
  return (
    <div className={`m-0 conteiner-fluid d-flex  row ${body}`}>
    <div className='d-flex justify-content-start'>
      <Link to='/admin' className={`btn  m-2 shadow d-flex justify-content-start ${link} ${button}`}> 🔙 volver</Link>
    </div>
  <div className={` m-3 p-2 conteiner-fluid`}>
      <h2 className={`d-flex justify-content-center ${title}`}>Modificar Informacion</h2>
      <form className={` row d-flex justify-content-start ${form}`} onSubmit={handleSumit}>
      <div className={`d-flex justify-content-center row `}>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start ${title} `}>Titulo</label>
              <input type="text" className={`form-control ${input} ${border} `} id="titulo" name='titulo'  required 
              onChange={(e)=>setTitulo(e.target.value)} value={titulo}/>
          </div>
          <div className="mb-3 m-2 col-6">
              <label  className={`form-label d-flex justify-content-start  ${title}`}>Cuerpo</label>
              <input type="text" className={`form-control ${input} ${border} `} id="cuerpo" name='cuerpo' required 
                onChange={(e)=>setCuerpo(e.target.value)} value={cuerpo}/>
          </div>
          <button type="submit" className={`btn mb-3 m-2 col-6 ${button} ${border}`}>Enviar</button>    
      </div>
      </form>
  </div>
  
  </div>
  )
}

export default ModificarInfo