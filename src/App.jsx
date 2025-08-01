
import './App.css'
import Login from './components/LoginPage/Login'
import {Routes,Route} from 'react-router'
import Home from './components/HomePage/Home'
import Popular from './components/PopularPage/Popular'
import NotFound from './components/NotFoundPage/NotFound'
import SearchPage from './components/SearchPage/SearchPage'
import MovieDetails from './components/MovieDetailsPage/MovieDetails'
import Accounts from './components/AccountsPage/Accounts'
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home></Home>} />
      <Route path="/popular" element={<Popular></Popular>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
      <Route path='/search' element={<SearchPage></SearchPage>}></Route>
      <Route path='/moviedetails/:id' element={<MovieDetails></MovieDetails>}></Route>
      <Route path="/accounts" element={<Accounts></Accounts>}></Route>
    </Routes>
     
    </>
  )
}

export default App
