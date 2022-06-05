import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Teams from './components/Teams/Teams'
import Games from './components/Games'
import TeamsDetail from './components/Teams/TeamDetail'
import Players from './components/Players/Players'
import PlayersDetail from './components/Players/PlayersDetail'
import PVP from './components/PVP'
import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <h1>SHEEEEESH</h1> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:id" element={<TeamsDetail />} />
            <Route path="/games" element={<Games />} />
            <Route path="/players" element={<Players />} />
            <Route path="/players/:playerID" element={<PlayersDetail />} />
            <Route path="/pvp" element={<PVP />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
