import React from 'react'
import {MainPage} from "pages/MainPage"
import {Navigate, Route, Routes} from 'react-router-dom'
import {Paths} from "utils/enums";


function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Navigate to={Paths.MAIN}/>}/>
        <Route path={Paths.MAIN} element={<MainPage/>}/>
        <Route path={Paths.CURRENT_NEWS} element={<h1>Current News</h1>}/>
      </Routes>
    </div>
  )
}

export default App
