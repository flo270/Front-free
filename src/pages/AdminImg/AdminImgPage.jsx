import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styles from '../AdminImg/AdminImg.module.css'
import { useNavigate } from 'react-router-dom'
import TablaImg from '../../components/tablaImg/TablaImg'

const AdminImgPage = () => {
const [imagen, setImagen] = useState([])
const baseUrl= "https://backendconsultorio2-production.up.railway.app";

const getAllImg= ()=>{
    axios.get(`${baseUrl}/imagenes`)
    .then(response=>{
        setImagen(response.data.imagenes)
    })
}
useEffect(() => {
getAllImg()
}, [])

const {body,table,border,button,title}=styles
const navigate=useNavigate()



return (
    <div className={`container-fluid ${body}`}>
    <h1 className={`${title}`}>Panel de administracion de imagenes</h1>
    <div className= " row mt-5 justify-content-center">
    {<div>
        <button className={`btn d-flex justify-contect-start ${button} ${border} m-2`}onClick={()=>navigate('/crearImg')}>
            Crear nuevo</button>
        <div className='row'>
          <div>
          <table  className={`table table-hover table-responsive ${table} ${border} mx-auto`}>
            <thead>
              <tr>
                <th scope="col">Imagens</th>
                <th scope="col">nombre</th>

                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {
              imagen.map((imagenes)=>(
                <TablaImg imagenes={imagenes} key = {imagenes._id}/>
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

export default AdminImgPage