import { Route, Routes,BrowserRouter } from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"
import Add from "./Add"
import Result from "./Result"
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/result' element={<Result/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App