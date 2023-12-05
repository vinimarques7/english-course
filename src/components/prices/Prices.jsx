import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './prices.css'

function Prices() {
  return (
    <>
     <div className='prices-container'>
      <div className='prices_information'>
        <div className='prices_organization'>
            <h1>PACOTES DISPONÍVEIS!</h1>
            <p><FontAwesomeIcon icon={faCheck} /> R$240: 4 AULAS POR MÊS</p>
            <p><FontAwesomeIcon icon={faCheck} /> R$420: 8 AULAS POR MÊS (UMA SAI GRÁTIS!)</p>
        </div>
      </div>

    </div>
    </>
  )
}

export default Prices;
