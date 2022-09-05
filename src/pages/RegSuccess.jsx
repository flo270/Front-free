import React from 'react'
import reg from '../asserts/image/registro.gif'
import { useNavigate } from 'react-router-dom'
const RegSuccess = () => {
    const nav = useNavigate()
    setTimeout(() => {
        nav('/')
    }, 1500);
  return (
    <div className='conteiner-fluid d-flex justify-content-center'>
        <img src={reg} alt="img registro" />
        <h2>Registrada con exito!!</h2>
    </div>
  )
}

export default RegSuccess