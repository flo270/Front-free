import React from 'react'
import {Link} from 'react-router-dom'
const CardService = () => {
  return (
    <div>
        <div className="card text-center">
        <div className="card-header">
            <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
                <Link className="nav-link active p-2 m-2" to="/">Active</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active p-2 m-2" to="/">Link</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active p-2 m-2" to="/"  aria-disabled="true">Disabled</Link>
            </li>
            </ul>
        </div>
        <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <Link to="/" className="btn btn-primary">Go somewhere</Link>
        </div>
        </div>
    </div>
  )
}

export default CardService