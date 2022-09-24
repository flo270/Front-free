import React from 'react'
import styles from '../tablaImg/TablaImg.module.css'
import axios from 'axios'
import SubmitButton from '../submitButton/SubmitButton'
const TablaImg = ({imagenes}) => {
const {img,nombre,fav,_id}= imagenes
const baseUrl= " https://backendconsultorio2-production.up.railway.app";

const {input,buttonDelete}=styles

const borrarImg=(_id)=>{
 console.log(_id)
 if (window.confirm("¿Estas seguro de borrar el registro de imagenes?")){
    axios.delete(`${baseUrl}/imagenes/${_id}`) 
  .then(response=>{
    if (response.status===201) {
     alert('EXITO AL ELIMIAR EL REGISTRO')
     window.location.reload()
    }else{
    alert('ALGO SALIO MAL Y EL REGISTRO PERSISTE')
    }
})  
    
} else {
        alert('HUBO UN PROBLEMA Y EL REGISTRO NO SE ELIMINO, ERROR')
} }
    
 const addFavorite = () => {
     try{
        axios.put(`${baseUrl}/imagenes/${_id}`,{
          img:img,
          nombre:nombre,
          fav: true
        })
        .then((res)=>{
            console.log(res.data.imagenes)
          window.location.reload()
         })
     } catch(error){
      console.log(error)
     }
    }
        
const removeFavorite = () => {
 try{
     axios.put(`${baseUrl}/imagenes/${_id}`,{
        img:img,
       nombre:nombre,
         fav: false
     })
    .then((res)=>{
        console.log(res.data.imagenes)
       window.location.reload()
     })
} catch(error){
  console.log(error.response.data.msg)
 }
}
  return (
    <tr>
        <td className={`${input}`}><img src={img} alt={nombre} className='w-50'/> </td>
        <td className={`${input}`}>{nombre}{' '}{fav}</td>
            
        <td className={`${input}`}>
            {fav ? <SubmitButton mensage={"Out fav"} handlerClick={removeFavorite} /> :  <SubmitButton mensage={"Add fav"}  handlerClick={addFavorite} />}
        <button className={`btn shadow ${buttonDelete}`} onClick={()=>{borrarImg(_id)}}>Eliminar</button>
        </td>
    </tr>
  )
}

export default TablaImg