import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import styles from '../consulta/Consulta.module.css'
import { useNavigate } from 'react-router-dom';

const ConsultaPage = () => {
    const {body,table,border,input,button,title,buttonDelete}=styles
    const [consulta, setConsulta] = useState([{
        _id:"",
        paciente:"",fecha_consulta:"",
        sintomas:"",diagnostico:"",tratamiento:"",estudios:"",resultadoEst:"",medico:""
    }])
const [consultaAux, setConsultaAux] = useState()
    const navigate=useNavigate()
    const baseUrl= "https://backendconsultorio2-production.up.railway.app";

    const getAllConsultas=()=>{
        axios.get(`${baseUrl}/consulta`)
        .then(res=>{
          console.log(res.data)
          setConsulta (res.data)
          setConsultaAux(res.data)
        })
    }
    useEffect(() => {
     getAllConsultas()
    }, [])
 
  //botones para cambios en consulas     
  const modificarC=(_id)=>{
    if (_id!=null) {
      navigate(`/modificarConsulta/${_id}`)
    } else {
      alert('Hubo un error al acceder al registro de consulta')
    }
  }
  const borrarC=(_id)=>{
    if (window.confirm("¿Estas seguro de borrar el registro de consulta?")){
      axios.delete(`${ baseUrl}/consulta/${_id}`)
      .then(response=>{
        if (response.status === 201) {
          alert('EXITO AL ELIMIAR EL REGISTRO')
          window.location.reload();
        }else{
         alert('ALGO SALIO MAL Y EL REGISTRO PERSISTE')
       }
     })  
        } else {
      alert('HUBO UN PROBLEMA Y EL REGISTRO NO SE ELIMINO, ERROR')        
     }
  }

  const filterCons=(e)=>{
    if (e.length >= 3) {
      console.log('es mayor a 3')
    const filterConsulta = consultaAux.filter((consul)=>{
      if (consul.paciente.dni.toString().indexOf(e.toLowerCase())!==-1 
      ||consul.paciente.apellido.toLowerCase().indexOf(e.toLowerCase())!==-1) {
       return consul
       }
       })
         setConsulta(filterConsulta)
       }else{
        getAllConsultas()
        }
  }


  return (
    <div className={`container-fluid ${body}`}>
    <h1 className={`${title}`}>Panel de consultas</h1>
    <div className="mb-3">
        <label  className={`form-label `}>Buscar  DNI / Apellido del paciente </label>
        <input type="text" className={`form-control ${input} ${border}`} onChange={(e) => filterCons(e.target.value)} id="exampleFormControlInput1"/>
    </div>
    <div className= " row mt-5 justify-content-center">
    {<div>
      <button className={`btn d-flex justify-contect-start ${button} ${border} m-2`}onClick={()=>navigate('/crearConsulta')}>
            Crear nueva consulta</button>
        <div className='row'>
          <div>
          <table  className={`table table-hover table-responsive ${table} ${border} mx-auto`}>
            <thead>
              <tr>
                <th scope="col">Paciente</th>
                <th scope="col">Fecha de consulta</th>
                <th scope="col">Sintomas</th>
                <th scope="col">Diagnostico</th>
                <th scope="col">Tratamiento</th>
                <th scope="col">Estudios</th>
                <th scope="col">Resultado Estudios</th>
                <th scope="col">Medico</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {
              consulta.map((consultas,i)=>(
                <tr key= {i}>
               <td className={`${input}`}>{consultas.paciente.apellido} {consultas.paciente.nombre}{' '}{consultas.paciente.dni}</td> 
                <td className={`${input}`}>{consultas.fecha_consulta}</td>
                <td className={`${input}`}>{consultas.sintomas}</td>
                <td className={`${input}`}>{consultas.diagnostico}</td>
                <td className={`${input}`}>{consultas.tratamiento}</td>
                <td className={`${input}`}>{consultas.estudios}</td>
                <td className={`${input}`}>{consultas.resultadoEst}</td>
                <td className={`${input}`}>{consultas.medico.nombreCompleto}</td>
                <td className={`${input}`}>
                <button className={`btn mx-2 ${button} ${border}`} onClick={()=>{modificarC(consultas._id)}}>Modificar </button>
                  <button className={`btn shadow ${buttonDelete}`} onClick={()=>{borrarC(consultas._id)}}>Eliminar</button> 
                </td>
                </tr>
                ))
              }  
            </tbody>
          </table>
          </div>
        </div>
      </div> 
      } 
    </div>        
  </div>
  )
}

export default ConsultaPage