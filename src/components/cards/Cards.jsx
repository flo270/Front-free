import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styles from '../cards/Card.module.css'
const Cards = () => {
const {title,body,border,form}= styles

  const [card, setCard] = useState([])
  const baseUrl ='https://backendconsultorio2-production.up.railway.app'
  const getData = async()=>{
    const res =  await axios(`${baseUrl}/medico` )
    const med= res.data
    console.log(med)
    setCard(res.data.filter(Cards=>Cards.fav))
  }
useEffect(() => {
  getData()
}, [])
  return (
    <div className={`card-group ${body} row m-0`}>
      <h2 className={`${title} d-flex justify-content-center p-3`}>
        Nuestros Medicos
      </h2>
      {
        card.map(x=>{
          return  <div className={`card-group col-6 ${body} `}  key={x._id}>
          <div className={`card ${body}`} >
            <div className={`card-body ${form} ${border}`}>
            <h5 className={`card-title ${title}`}>{x.nombreCompleto}</h5>
            <p className={`card-text`}>{x.especialidad}</p>
            <p className={`card-text`}><small className="text-muted">{x.horario}</small></p>
            </div>
         </div>
       </div>
        })
      }
       
    </div>
  )
}

export default Cards