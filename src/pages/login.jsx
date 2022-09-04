import React from 'react'
import LoginForm from '../components/login/LoginForm'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { tokenInvalid } from '../utils/ValidacionToken'

const Login = () => {
    const navigate=useNavigate()
const [email, setEmail] = useState()
const [password, setPassword] = useState()

const handleLogin = async (e)=>{
e.preventDefault()
if(email===undefined || password===undefined){
    alert('Campos requeridos')
}else{
    try {
        await axios.post('http://localhost:8080/users/login',{
            email:email,
            password:password
        })
        .then((response)=>{
            console.log(response.data)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("admin", response.data.admin)
            window.location.reload()
            navigate("/loginsucces")
        }
        )
    } catch (error) {
        alert(error.response.data.msg)
    }
}
}  
useEffect(() => {
 const token = tokenInvalid()
 if(!token.invalidToken){
    navigate('/home')
  }
}, [])

  return (
   <LoginForm handleLogin={handleLogin}
   email={setEmail}
   password={setPassword}/>
  )
}

export default Login