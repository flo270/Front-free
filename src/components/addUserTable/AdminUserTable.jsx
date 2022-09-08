import React from 'react'
import axios from 'axios';
import SubmitButton from '../submitButton/SubmitButton';


const AdminUserTable = ({user}) => {
  const { email, nombreCompleto, admin, banned, _id, password } = user;

  const token = localStorage.getItem("token")
  const baseUrl="http://localhost:8080/users";
  
  const bannUser = () => {
    try {
      console.log(_id);
      axios.put(`${baseUrl}/${_id}`, {
        nombreCompleto: nombreCompleto,
        email: email,
        password: password,
        banned: true,
        admin: admin
      }, {
        headers: {
          "access-token": token,
        }
      })
      .then(()=>{
        window.location.reload()
      })
    } catch (error) {
      console.log(error)
    }
  }
  const activeUser = () => {
    try {
      axios.put(`${baseUrl}/${_id}`, {
        nombreCompleto: nombreCompleto,
        email: email,
        password: password,
        banned: false,
        admin: admin
      }, {
        headers: {
          "access-token": token,
        }
      })
      .then(()=>{
        window.location.reload()
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <tr>
      <td>{`${nombreCompleto}`}</td>
      <td>{`${email}`}</td>
      <td>{`${admin}`}</td>
      <td>{`${banned}`}</td>
      <td>
        {banned ? <SubmitButton mensage={"Activar"} handlerClick={activeUser}/> : <SubmitButton mensage={"Desactivar"} handlerClick={bannUser} />}
      </td>
    </tr>
  );
}

export default AdminUserTable