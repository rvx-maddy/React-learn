import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Login, { Profile, Setting } from './UserComponent'
import ReactProps from './ReactProps'
import PropsExample from './PropsExample'
function App() {
  return (
    <>
      <h1>Hellow JS </h1>
      <Login />
      <Profile />
      <Setting />
      <PropsExample />
      <ReactProps name="Bibek Kunwar" age={21} hobbies={["Cricket", "coding", "reading"]} />


    </>
  )
}

export default App