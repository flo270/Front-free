import React from 'react'
import Cards from '../../components/cards/Cards'
import CardService from '../../components/CardService/CardService'
import Carrusel from '../../components/carrusel/Carrusel'
import styles from '../home/Home.module.css'

const home = () => {
  const {body}=styles
  return (
  <div className={`${body}`}>
    <Carrusel/>
    <CardService/>
    <Cards/>
  </div>
  )
}

export default home