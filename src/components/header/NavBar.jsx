import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { tokenInvalid } from '../../utils/ValidacionToken'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';
import styles from '../header/NavBar.module.css'

const NavBar = () => {
  const {
    navigateLink,
    navigateLinkActive
  }=styles
  //estados para el login
  const [isLogged, setIsLogged] = useState(false)
  const [adminProfile, setAdminProfile] = useState(false)
  const navigate=useNavigate()
//verificacion login
  const verifyLogin = () => {
    const token = tokenInvalid()
    // let tokenExist = localStorage.getItem("token") ? true : false
    setIsLogged(!token.invalidToken)
    setAdminProfile((token.decode?.admin)? true : false)
  }
  useEffect(() => {
    verifyLogin()
  }, [])
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-dark `}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">Consultorio medico</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav ">
          <li className="nav-item">
              <Link to='/home' className='nav-link text-white'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/home' className='nav-link text-white'>Otro</Link>
            </li>
            <li className="nav-item">
              <Link to='/home' className='nav-link text-white'>servicios</Link>
            </li>
            <li className="nav-item">
              <Link to='/register' className='nav-link text-white'>Registrarse</Link>
            </li>
            <li>
              { (isLogged && adminProfile) && <Link
              className={({ isActive }) =>
                isActive ? `${navigateLinkActive}` : `${navigateLink}`
              }
              to={"/admin"}
              onClick={() => verifyLogin()}
            >
              Administrador
              </Link>
              }
            </li>
          </ul>
          <ul>
          <li xs="auto" className="m-0">
            <DropdownButton 
              id="dropdown-item-button m-1"
              title="👥"
              align="end"
              menuVariant="dark"
              key="Secondary"
              className='bg-dark'
            >
              {!isLogged && (
                <Dropdown.Item
                  as="button"
                  className={`dropdown-item `}
                  onClick={() => {
                    verifyLogin();
                    navigate("/login", { replace: true });
                  }}
                >
                  Iniciar sesión
                </Dropdown.Item>
              )}
              {!isLogged && (
                <Dropdown.Item
                  as="button"
                  className={`dropdown-item `}
                  onClick={() => {
                    verifyLogin();
                    navigate("/register", { replace: true });
                  }}
                >
                  Registrarse
                </Dropdown.Item>
              )}

              {isLogged && (
                <Dropdown.Item
                  as="button"
                  className={`dropdown-item `}
                  onClick={() => {
                    localStorage.removeItem("token");
                    verifyLogin();
                    navigate("/", { replace: true });
                  }}
                >
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