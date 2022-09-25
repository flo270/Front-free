import React,{useState} from 'react'
import axios from 'axios'
import SubmitButton from '../submitButton/SubmitButton'
import styles from '../AddInfoModal/AddInfoModal.module.css'
const AddInfoModal = () => {
    const {body, form,border,inputBorder,button,input,title,img}=styles
    const [titulo, setTitulo] = useState()
    const [cuerpo, setCuerpo] = useState()
    const baseUrl="https://backendconsultorio2-production.up.railway.app";

    const addInfo = (event) => {
        event.preventDefault();
        
        if (
         titulo === undefined ||
         cuerpo === undefined ) {
          alert("Todos los campos son obligatorios");
        } else {
          try {
            axios
                .post(`${baseUrl}/info`, {
                  titulo:titulo,
                  cuerpo:cuerpo
                })
                .then(()=>{
                  window.location.reload();
                 
                })
          } catch (error) {
            console.log(error)
          }}}
  return (
    <div className="modal fade col-2" id="addInfoModal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className={`container-fluid`}>
  <div className={`row justify-content-center align-items-center ${body}`}>
    <form className={`col-12 w-100 rounded  d-flex flex-column align-items-center ${form} ${border}`} onSubmit={addInfo} >
      <h2 className={`text-center fs-4 mb-5 pb-4 mt-3 ${title}`}>Añadir Informacion nueva</h2>
       <div className="input-group mb-3 p-2">
         <span className={`input-group-text ${img}`} id="basic-addon1"><box-icon type='solid' name='file'></box-icon></span>
        <input autoComplete='off' type="text" className={`form-control ${input} ${inputBorder}`} placeholder="Titulo" 
        aria-label="text" aria-describedby="basic-addon1" maxLength={25} onChange={(e)=>setTitulo(e.target.value)} />
        </div>
        <div className="input-group mb-3 p-2">
            <span className={`input-group-text ${img}`} id="basic-addon1"><box-icon name='list-minus'></box-icon></span>
            <input autoComplete='off' type="text" className={`form-control ${input} ${inputBorder} `} placeholder="Cuerpo" 
            aria-label="email" aria-describedby="basic-addon1" onChange={(e)=>setCuerpo(e.target.value)} />
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

export default AddInfoModal