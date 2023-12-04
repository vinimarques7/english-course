import React from 'react'
import './intro.css'

function Intro() {
  return (
    <>
    <div className='intro-container'>
      <div className='intro_information'>
        <div className='intro_organization'>
            <h1>Por que você deve estudar inglês?</h1>
            <p>A língua inglesa é extremamente requisitada por ser a língua mais efetiva na comunicação internacional. Por muitos anos, o movimento de globalização foi introduzindo cada vez mais os termos da língua em outras culturas. E a nossa não é excessão!</p>
            <p>Um exemplo está nos meios industrial e comercial com a presença de termos como feedback, call e meeting. Outros exemplos estão no nosso cotidiano como Facebook, Youtube, Knockout (ou nocaute).</p>
            <p>Contudo é sempre importante dar um passo adiante e passar a entender que o inglês vai além da globalização, mas entender a oportunidade de aproveitar diferentes experiências seja elas dentro ou fora de seu país. </p>
        </div>
        <div className='vini_video'>
            <h1>imagem minha; ou vídeo</h1>        
        </div>
      </div>

    </div>
    </>
  )
}

export default Intro;