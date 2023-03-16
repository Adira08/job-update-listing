import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DispayJobs from './Components/DispayJobs'
import Form from './Components/Form'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/displayjobs" element={<DispayJobs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App