import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './offer.css'


function Offer() {
  return (
    <>
     <div className='offer-container'>
      <div className='offer_information'>
        <div className='offer_organization'>
            <h1>O que eu posso te oferecer?</h1>
            <p><FontAwesomeIcon icon={faCheck} /> Flexibilidade de Horários</p>
            <p><FontAwesomeIcon icon={faCheck} /> Estudo direcionado ao objetivo desejado</p>
            <p><FontAwesomeIcon icon={faCheck} /> Estudo utilizando mídias</p>
            <p><FontAwesomeIcon icon={faCheck} /> Conversação individual</p>
            <p><FontAwesomeIcon icon={faCheck} /> Aulas online focadas na sua automomia</p>
        </div>
      </div>

    </div>
    </>
  )
}

export default Offer;
