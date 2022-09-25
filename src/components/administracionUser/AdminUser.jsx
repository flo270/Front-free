import React, {useState,useEffect} from 'react'
import axios from 'axios';
import AdminUserTable from '../addUserTable/AdminUserTable'
import AddUserModalComp from '../addUserModalComp/AddUserModalComp'
import SubmitButton from '../submitButton/SubmitButton';
import { motion } from "framer-motion";
const AdminUser = () => {
  const [users, setUsers] = useState([]);
  const baseUrl ='https://backendconsultorio2-production.up.railway.app'
  const getAllUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const getUsers = await axios(`${ baseUrl}`, {
        headers: {
          "access-token": token,
        },
      });
      setUsers(getUsers.data);
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
  >
    <section className="m-5">
      <div className="container-fluid">
        <div className="row justify-content-around">
          <h2 className="col-12 col-lg-6 text-center display-4">
            Tabla de usuarios
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
        className={`table table-dark table-hover table-responsive `}
      >
        <thead>
          <tr>
            <th scope="col" className="p-3">
              Nombre
            </th>
            <th scope="col" className="p-3">
              Email
            </th>
            <th scope="col" className="p-3">
              Admin
            </th> 
            <th scope="col" className="p-3">
              Estado
            </th>
            <th scope="col" className="p-3">
              Banear
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <AdminUserTable user={user} key={user._id} />
          ))}
        </tbody>
      </table>
    </section>
  </motion.div>
  )
}

export default AdminUser