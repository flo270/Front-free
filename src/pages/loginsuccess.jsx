import React from 'react'
import { useNavigate } from 'react-router-dom'
import log from '../asserts/image/lock.gif'
const loginsuccess = () => {
    const navigate = useNavigate();

    setTimeout(() => {
      navigate("/home")
    }, 1500);
  return (
    <div>
        <img src="https://c.tenor.com/9Ez46wr-voMAAAAC/lock.gif" alt="candado_login" />
        <h2 className={`text-center mb-5 display-5 fw-bold `}>Logueado con exito</h2>
    </div>
  )
}

export default loginsuccess