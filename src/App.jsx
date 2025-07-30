
import './App.css'
import Login from './components/LoginPage/Login'
import {Routes,Route} from 'react-router'
import Home from './components/HomePage/Home'
import Popular from './components/PopularPage/Popular'
import NotFound from './components/NotFoundPage/NotFound'
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home></Home>} />
      <Route path="/popular" element={<Popular></Popular>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
     
    </>
  )
}

export default App
