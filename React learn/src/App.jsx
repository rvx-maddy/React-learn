import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Login, { Profile, Setting } from './UserComponent'

function App() {
  return (
    <>
      <h1>Hellow JS </h1>
      <Login />
      <Profile />
      <Setting />
    </>
  )
}

export default App