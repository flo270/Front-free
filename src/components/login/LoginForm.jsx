import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../login/LoginForm.module.css'

const LoginForm = ({handleLogin,email,password}) => {
const {body, form,border,inputBorder,button,input,title,img,link}=styles

  return (
    <div className={` row justify-content-center align-items-center vh-100 ${body}`}>
    <form className={`col-10 col-sm-6 col-lg-3 col-md-4 col-xl-3 col-xxl-2 py-5 px-3 rounded 
     d-flex flex-column align-items-center ${form} ${border} `} onSubmit={handleLogin} >
      <h2 className={`text-center fs-4 mb-5 pb-4 mt-3 ${title}`}>Iniciar sesion</h2>
      <div className="input-group mb-3 p-2">
        <span className={`input-group-text ${img}`} id="basic-addon1"><box-icon name="envelope" color="#ffffff" ></box-icon></span>
        <input autoComplete='off' type="email" className={`form-control ${input} ${inputBorder}`} placeholder="email" aria-label="email" aria-describedby="basic-addon1" onChange={(e)=>email(e.target.value)}/>
      </div>
      <div className="input-group mb-3 p-2">
        <span className={`input-group-text ${img} `} id="basic-addon1"><box-icon name="lock" color="#ffffff" ></box-icon></span>
        <input autoComplete='off' type="password" className={`form-control ${input} ${inputBorder} `} placeholder="password" aria-label="password" aria-describedby="basic-addon1" onChange={(e)=>password(e.target.value)} />
      </div>      
      <button className={`btn ${button} ${border}`}>Ingresar</button> 
      <Link to={"/register"} className={`text-center text-decoration-none mt-5  ${link}`}>¿No estas registrado?</Link> 
      <Link to={"/recoverPass"} className={`text-center text-decoration-none ${link}`}>¿Olvidaste tu contraseña?</Link> 
    </form>
  </div>
  )
}

export default LoginForm