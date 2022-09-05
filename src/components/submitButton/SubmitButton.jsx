import React from 'react'

const SubmitButton = ({mensage, handlerClick, dataBsToggle, dataBsTarget }) => {
  return <button type="submit" data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget}
     onClick={handlerClick} className={`btn  mt-3 rounded`}>{mensage}</button>;
  
}

export default SubmitButton