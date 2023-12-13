import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SideBar from './components/SideBar'
import Layout from './components/Layout'
import Base from './components/Base'
import Game from './components/Game'
import Mining from './components/Skills/Mining'
import Fishing from './components/Skills/Fishing'
import './App.css'
import { Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Base />} />
          <Route path="/mining" element={<Mining />} />
          <Route path="/fishing" element={<Fishing />} />
        </Route>
      </Routes>
      

    </>
  )
}

export default App
