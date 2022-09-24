import React, {useState,useEffect} from 'react'
import axios from 'axios';
import AdminUserTable from '../../components/addUserTable/AdminUserTable'
import AddUserModalComp from '../../components/addUserModalComp/AddUserModalComp';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import styles from '../administrador/Admin.module.css'
import SubmitButton from '../../components/submitButton/SubmitButton';
import InfoesTabla from '../../components/infoes/InfoesTabla';
import AddInfoModal from '../../components/AddInfoModal/AddInfoModal';

const Admin = () => {

  const{body,table,button}=styles
const navigate=useNavigate()
  const [users, setUsers] = useState([]);
  const [info, setInfo] = useState([])
  
  const baseUrl="https://consultoriomedicoarg.herokuapp.com";
  const getAllUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const getUsers = await axios(`${baseUrl}/users`, {
        headers: {
          "access-token": token,
        },
      });
      console.log(getUsers.data.users)
      setUsers(getUsers.data.users);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  
  useEffect(() => {
    getAllUsers()
  }, [])
     const getAllInfo = async()=>{
      try {
        const getInfo = await axios(`${baseUrl}/info`)
        setInfo(getInfo.data.Infoes)
      } catch (error) {
        console.log(error.response.data);
      }
     }
     useEffect(() => {
      getAllInfo()
         }, [])
     
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.1 }}  
    className={`conteiner-fluid justify-content-center align-items-center ${body}`}>
      <section className={`p-1 ${body}`}>
        <button className={`${button}`} onClick={()=>navigate('/adminMedico')}>Administrar Medicos y horarios</button>
        <button className={`${button}`} onClick={()=>navigate('/adminImagenes')}>Administrar Imagenes</button>
        <SubmitButton  mensage={"Administrar turnos"}/>
      </section>
    <section className={`m-5 ${body}`}>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <h2 className="col-12 col-lg-6 text-center display-4">
            Administracion de usuarios
          </h2>
          <div className="col-12 col-lg-6">
          <SubmitButton
                mensage={"Agregar usuario"}
                dataBsToggle="modal"
                dataBsTarget="#addUserModal"
              />
              <AddUserModalComp />
          </div>
        </div>
      </div>
      <table
        className={`table table-hover table-responsive ${table} mx-auto`}
      >
        <thead>
          <tr>
            <th scope="col" className="p-3"> Nombre completo</th>
            <th scope="col" className="p-3">Email </th>
            <th scope="col" className="p-3">Admin </th>
            <th scope="col" className="p-3">Estado </th>
            <th scope="col" className="p-3">Opciones </th>
          </tr>
        </thead>
        <tbody>
         { 
         
          users?.map((user) => (
           
            <AdminUserTable user={user} key={user._id} />
          )) 
          }
        </tbody>
      </table>
    </section>
    {/* seccion de informacion de la pagina principal */}
    <section className={`m-5 ${body}`}>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <h2 className="col-12 col-lg-6 text-center display-4">
            Administracion de Informacion en pagina principal
          </h2>
          <div className="col-12 col-lg-6">
          <SubmitButton
                mensage={"Agregar Info nueva"}
                dataBsToggle="modal"
                dataBsTarget="#addInfoModal"
              />
              <AddInfoModal/>
          </div>
        </div>
      </div>
      <table className={`table table-hover table-responsive ${table} mx-auto`}>
        <thead>
          <tr>
            <th scope="col" className="p-3"> Titulo</th>
            <th scope="col" className="p-3">Cuerpo </th>           
            <th scope="col" className="p-3">Opciones </th>
          </tr>
        </thead>
        <tbody>
         { 
          info?.map((infoes) => (
           <InfoesTabla infoes={infoes} key={infoes._id} />
          )) 
          }
        </tbody>
      </table>
    </section>
  </motion.div>
  )
}

export default Admin