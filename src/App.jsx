import React from 'react'
import { Header, Welcome } from './containers'
import { Logobar, Offer, Intro, Prices, Desktopload } from './components'
import './App.css'


function App() {
  return (
    <>
      <div className='cat_class'>
          <Desktopload />
      </div>
      <div className='App'>
        <div className='gradient__bg'>
          <Logobar />
          <Header />
        </div>  

        <div>
          <Intro />  
        </div>
        <div>
          <Offer />
        </div>
        <div>
          <Prices />
        </div>
      </div>
      <Welcome />
    </>
  )
}

export default App
