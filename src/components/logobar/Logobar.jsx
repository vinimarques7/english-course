import React from 'react'
import logo_transparent from '../../assets/logo/logo_transparent.png'
import './logobar.css'

function Logobar() {
  return (
    <>
    <div className='logobar-container'>
      <div className='logobar_logo'>
        <img src={logo_transparent} alt="logo" />
      </div>
      <div className='vini_image'>
        <h1>imagem minha</h1>        
      </div>
    </div>
    </>
  )
}

export default Logobar;
