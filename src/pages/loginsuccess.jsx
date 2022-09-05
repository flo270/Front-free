import React from 'react'
import log from '../asserts/image/lock.gif'
import { useNavigate } from 'react-router-dom'
const LoginSuccess = () => {
    const nav=useNavigate()
    setTimeout(() => {
        nav('/home')
    }, 1500);
  return (
    <div>
        <img src={log} alt="login" />
        <h1>Incio sesion con extito</h1>

    </div>
  )
}

export default LoginSuccess