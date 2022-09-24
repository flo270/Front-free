import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { tokenInvalid } from '../../utils/ValidacionToken'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate, NavLink } from 'react-router-dom';
import styles from '../header/NavBar.module.css'
import salud from '../../asserts/image/salud.png'

const NavBar = () => {
  const {
    navigateLink,
    navigateLinkActive,
    nav, text,img,button
  }=styles
  //estados para el login
  const [isLogged, setIsLogged] = useState(false)
  const [adminProfile, setAdminProfile] = useState(false)

  const navigate=useNavigate()
//verificacion login
  const verifyLogin = () => {
    const token = tokenInvalid()
    setIsLogged(!token.invalidToken)
    setAdminProfile((token.decode?.admin)? true : false)
  }
  useEffect(() => {
    verifyLogin()
  }, [])
 
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${nav} `}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${text} m-2 `} to="/">
         <img src={salud} alt="icono salud" className={`${img}`}/> Consultorio medico</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to='/' className={`nav-link ${text}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/home' className={`nav-link ${text}`}>Otro</Link>
            </li>
            <li className="nav-item">
              <Link to='/home' className={`nav-link ${text}`}>servicios</Link>
            </li>           
            <li className="nav-item m-2">
              { (isLogged && adminProfile) && 
              <NavLink className = {({ isActive }) =>isActive ? `${navigateLinkActive}` : `${navigateLink}`} to={"/admin"} 
              onClick={() => verifyLogin()}> Administrador </NavLink>}
            </li> 
            <li className="nav-item m-2">
              { (isLogged && adminProfile) && 
              <NavLink className = {({ isActive }) =>isActive ? `${navigateLinkActive}` : `${navigateLink}`} to={"/paciente"} 
              onClick={() => verifyLogin()}> Paciente </NavLink>}
            </li>
            <li className="nav-item m-2">
              { (isLogged && adminProfile) && 
              <NavLink className = {({ isActive }) =>isActive ? `${navigateLinkActive}` : `${navigateLink}`} to={"/consulta"} 
              onClick={() => verifyLogin()}> Consultas </NavLink>}
            </li>
          </ul>
          <ul className="navbar-nav m-3">
            <li xs="auto" className="m-0">
            <DropdownButton id="dropdown-item-button m-1" title="👥 Login" align="end" menuVariant="dark" key="Secondary" className={`btn  ${button}`}>
              {!isLogged && (<Dropdown.Item as="button" className={`dropdown-item ${button}`}
                  onClick={() => { verifyLogin(); navigate("/login", { replace: true });}}>
                  Iniciar sesión
                </Dropdown.Item>)}
              {!isLogged && ( <Dropdown.Item as="button" className={`dropdown-item ${button}`}
                  onClick={() => { verifyLogin(); navigate("/register", { replace: true });}}>
                  Registrarse
                </Dropdown.Item>
              )}
              {isLogged && (
                <Dropdown.Item as="button" className={`dropdown-item ${button}`}
                  onClick={() => { localStorage.removeItem("token"); verifyLogin();navigate("/", { replace: true }); }}>
                  Cerrar sesión
                </Dropdown.Item>
              )}
            </DropdownButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar