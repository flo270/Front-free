import React from 'react'
import Carrusel from '../../components/carrusel/Carrusel'
import styles from '../home/Home.module.css'

const home = () => {
  const {body}=styles
  return (
  <div className={`${body}`}>
    <Carrusel/>
  </div>
  )
}

export default home