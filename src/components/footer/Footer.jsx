import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='conteiner-fluid row bg-dark'>
        <div className='col-6'>
            <div className='col-xs-6 col-lg-6 d-flex justify-content-center align-items-center'>
            <Link to='/' className='text-white text-decoration-none'>Home</Link>
            </div>
            <div className='col-xs-6 col-lg-6 d-flex justify-content-center align-items-center'>
            <Link to='/' className='text-white text-decoration-none'>Home</Link>
            </div>
            <div className='col-xs-6 col-lg-6 d-flex justify-content-center align-items-center'>
            <Link to='/login' className='text-white text-decoration-none'>Login</Link>
            </div>
        </div>
        <div className='col-6'>
            <div className='col-xs-12 col-lg-6 d-flex justify-content-center align-items-center'>
            <Link to='/' className='text-white text-decoration-none'>1</Link>
            </div>
            <div className='col-xs-12 col-lg-6 d-flex justify-content-center align-items-center'>
            <Link to='/' className='text-white text-decoration-none'>2</Link>
            </div>
            <div className='col-xs-12 col-lg-6 d-flex justify-content-center align-items-center'>
            <Link to='/' className='text-white text-decoration-none'>3</Link>
            </div>
        </div>      
    </div>  
  )
}

export default Footer