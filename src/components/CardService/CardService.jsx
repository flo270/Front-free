import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import styles from '../CardService/CardService.module.css'
const CardService = () => {
    const [info, setInfo] = useState([])
    const baseUrl ='https://backendconsultorio2-production.up.railway.app'
    const getData = async()=>{
        const res =  await axios(`${baseUrl}/info` )
        setInfo(res.data.Infoes.filter(info=>info.fav))
      }
    useEffect(() => {
      getData()
    }, [])
const {title,body,border,button}= styles
  return (
    <div>
        <div className={`card text-center ${body}`}>
        <div className="card-header">
            <h1 className={`${title} ${border}`}>Informacion sobre los servicios</h1>
           {/*  <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
                <Link className="nav-link active p-2 m-2" to="/">Active</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active p-2 m-2" to="/">Link</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active p-2 m-2" to="/"  aria-disabled="true">Disabled</Link>
            </li>
            </ul> */}
        </div>
        <div className={`card-body ${title}`}>
            {
                info?.map(x=>{
                return <div key={x._id}>
                <h5 className={`card-title `}>{x.titulo}</h5>
                <p className={`card-text `}>{x.cuerpo}</p>
                    </div>
                })
            }
            
            <Link to="/" className={`btn ${button}`}>Contactanos </Link>
        </div>
        </div>
    </div>
  )
}

export default CardService