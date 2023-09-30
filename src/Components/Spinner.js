import React from 'react'
import loading from '../assets/Logos/Spinner1.gif'

 const Spinner = ()=> {
    return (
      <div className='text-center align-middle my-2'>
        <img src={loading} alt="loading" />
      </div>
    )
  
}

export default Spinner;