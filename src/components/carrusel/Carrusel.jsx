import React, {useState, useEffect} from 'react'
//import styles from '../carrusel/Carrusel.module.css'
import axios from 'axios'
const Carrusel = () => {
  const [imgFav, setImgFav] = useState([])
//  const {img}=styles
  const baseUrl= "http://localhost:8080";
  const getData = async()=>{
    const dataImg =  await axios(`${baseUrl}/imagenes` )
    const img=dataImg.data.imagenes.filter(img=>img.fav)
    console.log(img)
    setImgFav(dataImg.data.imagenes.filter(img=>img.fav))
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {
        imgFav?.map(x=>{
          return <div className="carousel-item active col-12 content_carousel" key={x._id}>
          <img src={x.img} className="d-block w-100 image_carousel" alt={x.nombre}/>
          <div className="carousel-caption d-none d-md-block col-3 ms-0 ps-0">
          </div>
        </div> 
        })
      }
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carrusel