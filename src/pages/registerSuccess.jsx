import React from 'react'
import res from '../asserts/image/registro.gif'
const registerSuccess = () => {
    const navigate = useNavigate();

    setTimeout(() => {
      navigate("/home")
    }, 1500);
  return (
    <div>
        <img src={res} alt="candado_login" />
        <h2 className={`text-center mb-5 display-5 fw-bold `}>Registrado con exito</h2>
    </div>
  )
}

export default registerSuccess