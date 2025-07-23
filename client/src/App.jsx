import Login from "./pages/login"
import Signup from './pages/signup'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
