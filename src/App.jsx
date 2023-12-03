import { useState } from 'react'
import { Header, Welcome } from './containers'
import { Logobar, Offer } from './components'
import './App.css'

function App() {
  return (
    <>
      <div>
        <Logobar />
        <Header />
      </div>
      <Welcome />
      <Offer />
    </>
  )
}

export default App
