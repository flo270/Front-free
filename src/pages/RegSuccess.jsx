import React from 'react'
import reg from '../asserts/image/registro.gif'
import { useNavigate } from 'react-router-dom'
import styles from '../pages/styles.module.css'
const RegSuccess = () => {
  const{body,table,border,title,img}=styles
    const nav = useNavigate()
    setTimeout(() => {
        nav('/')
    }, 1500);
  return (
    <div className={` m-0 conteiner-fluid justify-content-center align-items-center ${body}`}>
      <div className={`d-flex justify-content-center  ${border} row`}>
       
        <img src={reg} alt="img registro" className={`d-flex justify-content-center m-5 p-2 ${table} ${border}  ${img}`} />
        <h2 className={`d-flex justify-content-center ${title} `}>Registrada con exito!!</h2>
      </div>
        
    </div>
  )
}

export default RegSuccess