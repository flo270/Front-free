import React from 'react'
import RegiserForm from '../components/registerForm/RegiserForm';
import { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();
  const navigate = useNavigate();

  const handleForm = (event) => {
    event.preventDefault();
    if (
      fullName === undefined ||
      email === undefined ||
      password1 === undefined ||
      password2 === undefined
    ) {
      alert("Todos los campos son obligatorios");
    } else if (password1 !== password2) {
      alert("Las contraseñas deben coincidir");
    } else if (!email.includes("@")) {
      alert("Ingrese un email valido");
    } else if (fullName.length > 25) {
      alert("El nombre no puede superar los 25 caracteres");
    } else {
      axios
        .post(`http://localhost:8080/users`, {
          fullname: fullName,
          email: email,
          password: password1,
          admin: false,
          profile: "user"
        })
        .then(() => {
          alert("El usuario fue creado con exito");
          navigate("/registersucces");
        })
        .catch(() => alert("error"));
    }
  };

  return (
    <RegiserForm
      fullName={setFullName}
      email={setEmail}
      password1={setPassword1}
      password2={setPassword2}
      handleForm={handleForm}
    />
  );
};

export default Register