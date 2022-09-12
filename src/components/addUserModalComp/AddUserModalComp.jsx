import React from 'react'
import { useState,} from 'react'
import axios from 'axios'
import SubmitButton from '../submitButton/SubmitButton'
import styles from '../addUserModalComp/AddComp.module.css'


const AddUserModalComp = () => {
  const {body, form,border,inputBorder,button,input,title,img}=styles
  const [ nombreCompleto, setNombreCompleto] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [secondPass, setSecondPass] = useState()
  const [admin, setAdmin] = useState(false)
 

  const baseUrl="http://localhost:8080";

  const addUser = (event) => {
    event.preventDefault();
    
    if (
      nombreCompleto === undefined ||
      email === undefined ||
      password === undefined ||
      secondPass === undefined ||
      admin === undefined) {
      alert("Todos los campos son obligatorios");
    } else if (password !== secondPass) {
      alert("Las contraseñas deben coincidir");
    } else if (!email.includes("@")) {
      alert("Ingrese un email valido");
    } else if ( nombreCompleto.length > 25) {
      alert("El nombre no puede superar los 25 caracteres");
    } else {
      try {
        axios
            .post(`${baseUrl}/users`, {
              nombreCompleto:  nombreCompleto,
              email: email,
              password: password,
              admin: admin,
              banned: false
            })
            .then(()=>{
              window.location.reload();
             
            })
      } catch (error) {
        console.log(error)
      }}}

  return (
    <div className="modal fade col-2" id="addUserModal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className={`container-fluid`}>
  <div className={`row justify-content-center align-items-center ${body}`}>
    <form className={`col-12 w-100 rounded  d-flex flex-column align-items-center ${form} ${border}`} onSubmit={addUser} >
      <h2 className={`text-center fs-4 mb-5 pb-4 mt-3 ${title}`}>Añadir Usuario</h2>
       <div className="input-group mb-3 p-2">
         <span className={`input-group-text ${img}`} id="basic-addon1"><box-icon name='user' color="#ffffff" ></box-icon></span>
        <input autoComplete='off' type="text" className={`form-control ${input} ${inputBorder}`} placeholder="Nombre" 
        aria-label="text" aria-describedby="basic-addon1" maxLength={25} onChange={(e)=>setNombreCompleto(e.target.value)} />
        </div>
        <div className="input-group mb-3 p-2">
            <span className={`input-group-text ${img}`} id="basic-addon1"><box-icon name="envelope" color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="text" className={`form-control ${input} ${inputBorder} `} placeholder="Email" 
            aria-label="email" aria-describedby="basic-addon1" onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="input-group mb-3 p-2">
            <span className={`input-group-text  ${img}`} id="basic-addon1"><box-icon name="lock" color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="password" className={`form-control ${input} ${inputBorder}`} placeholder="Password" 
            aria-label="password" aria-describedby="basic-addon1" minLength={8} onChange={(e)=>setPassword(e.target.value)}/>
        </div>      
        <div className="input-group mb-3 p-2">
            <span className={`input-group-text  ${img}`} id="basic-addon1"><box-icon name="lock" color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="password" className={`form-control ${input} ${inputBorder}`} 
            placeholder="Repetir Password" aria-label="password" aria-describedby="basic-addon1" minLength={8} onChange={(e)=>setSecondPass(e.target.value)}/>
        </div>        
        <div className="input-group mb-3">
            <label className={`input-group-text ${img} `} htmlFor="inputGroupSelect01"><box-icon name="lock" color="#ffffff" ></box-icon></label>
            <select className={`form-select ${input} ${inputBorder}`} id="inputGroupSelect01" defaultValue="Usuario" onChange={(e)=>setAdmin(e.target.value)} >
              <option className={` ${input} ${inputBorder}`}>Seleccione una condicion</option>
              <option value={false} className={` ${input} ${inputBorder}`}>Usuario</option>
               <option value={true} className={` ${input} ${inputBorder}`}>Administrador</option>
            </select>
        </div>
       <div className={`mb-3`}>
          <SubmitButton mensage={"Enviar"} className={`mb-3 ${button}`} /> 
        </div>
    </form>
  </div>
  </div>
  </div> </div> </div>

  )
}

export default AddUserModalComp