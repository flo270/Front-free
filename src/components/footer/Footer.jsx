import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../footer/Footer.module.css'
const Footer = () => {
  const {foot, text}=styles
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${foot}`}>
      <div className={`container-fluid `}>
        <Link className={`navbar-brand ${text}`} to="/">Consultorio Medico</Link>
        <div className={`col-6 ${text}`} id="navbarNav">
          <ul className={`navbar-nav `}>
            <li className={`nav-item `}>
              <Link className={`nav-link active ${text}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link active ${text}`} to="/">Servicio</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link active ${text}`} to="/register">Registrarse</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link active ${text}`} to="/"  aria-disabled="true">Disabled</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Footer