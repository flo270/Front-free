import React from 'react'

const Carrusel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_W1nY3Dn00QCZFsgiybskAPKcSXutLC_FXQ&usqp=CAU" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRkA0dkteyqUgKvv8O-tXHzzvB50_ijkVM6w&usqp=CAU" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarDpccf2TzEQkpW3QMt-tM-H4CW_2xkzGYA&usqp=CAU" className="d-block w-100" alt="..."/>
      </div>
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