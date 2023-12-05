import React from 'react'
import black_cat_computer from '../../assets/gif/black_cat_computer.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './desktopload.css'

function Desktopload(){
    return(
        <>
        <div className='desktop_version'>
            <img src={black_cat_computer} alt="black_cat" />
            <h1>Versão em Desktop ainda está em desenvolvimento</h1>
            <p>para mais informações vá até o meu instagram</p>
            <a href="https://www.instagram.com/vinimarques7/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        </>
    )
   
}


export default Desktopload;