import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Components/Lab1/Greeting'
import BigCats from './Components/Lab2/BigCats/BigCats'
// import OrganizeCats from './Components/Lab4/OrganizeCats'
// import Emoji from './Components/Lab3/Emoji/Emoji'

function App() {

  return (
    <>
    {/* <Greeting /> */}
      <BigCats/>
      {/* <OrganizeCats/> */}
      {/* <Emoji/> */}
    </>
  )
}

export default App
