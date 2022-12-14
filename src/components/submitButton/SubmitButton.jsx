import React from 'react'
import styles from '../submitButton/Submit.module.css'

const SubmitButton = ({mensage, handlerClick, dataBsToggle, dataBsTarget }) => {
  return <button type="submit" data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget}
     onClick={handlerClick} className={`btn ${styles.button} mt-3 rounded`}>{mensage}</button>;
  
}

export default SubmitButton