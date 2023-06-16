import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NewsList from './pages/NewsList'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NewsList/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
