import React from 'react'
import log from '../asserts/image/lock.gif'
import { useNavigate } from 'react-router-dom'
import styles from '../pages/styles.module.css'

const LoginSuccess = () => {
  const{body,table,border,title,img}=styles
    const nav=useNavigate()
    setTimeout(() => {
        nav('/')
    }, 1500);
  return (
    <div className={` m-0 conteiner-fluid justify-content-center align-items-center ${body}`}>
      <div className={`d-flex justify-content-center  ${border} row`}>
       
        <img src={log} alt="login" className={`d-flex justify-content-center m-5 p-2 ${table} ${border}  ${img}`} />
        <h2 className={`d-flex justify-content-center ${title} `}>Logueada con exito!!</h2>
      </div>
        
    </div>
  )
}

export default LoginSuccess