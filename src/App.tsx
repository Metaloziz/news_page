import React from 'react'
import {MainPage} from "pages/MainPage/MainPage"
import {Navigate, Route, Routes} from 'react-router-dom'
import {CurrentNews} from "pages/CurrentNews/CurrentNews";
import {Paths} from "utils/enums/enums";


function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Navigate to={Paths.MAIN}/>}/>
        <Route path={Paths.MAIN} element={<MainPage/>}/>
        <Route path={Paths.CURRENT_NEWS} element={<CurrentNews/>}/>
      </Routes>
    </div>
  )
}

export default App
