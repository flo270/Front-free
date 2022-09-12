import React, {useState,useEffect} from 'react'
import axios from 'axios';
import AdminUserTable from '../../components/addUserTable/AdminUserTable'
import AddUserModalComp from '../../components/addUserModalComp/AddUserModalComp';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import styles from '../administrador/Admin.module.css'
import SubmitButton from '../../components/submitButton/SubmitButton';

const Admin = () => {

  const{body,table,button}=styles
const navigate=useNavigate()
  const [users, setUsers] = useState([]);
  
  const baseUrl="http://localhost:8080";
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
  </motion.div>
  )
}

export default Admin