import React from 'react'
import { useState,useEffect } from 'react'
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function SearchPage() {
    const navigate=useNavigate()
  const [searchInput,setSearchInput]=useState('')
  const [moviesList,setMoviesList]=useState([])
  const popularNavigation=()=>{
    navigate('/popular')
  }
  const homeNavigation=()=>{
        navigate('/home')
    }
  const goAccounts=()=>{
    navigate('/accounts')
  }
  useEffect(()=>{
    const searchMovies=async()=>{
        const token=Cookies.get('jwt_token')
        const url = `https://apis.ccbp.in/movies-app/movies-search?search=${searchInput}`;
        if(!token){
          navigate('/')
        }
        let options={
            method:"GET",
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
        let response=await fetch(url,options)
        let data=await response.json()
        if(response.ok){
            setMoviesList(data.results)
            
        }
    }
    searchMovies()
  },[searchInput])
  return (
    <div className="bg-black  w-full ">
      <nav className=" flex flex-col  w-full  px-[4%] py-5 relative z-10 h-[20vh] bg-cover">
        <div className="flex flex-column  w-full ">
          <div className="w-full flex">
            <img
              src="https://res.cloudinary.com/dnns0cphq/image/upload/v1727864135/netflix_logo_direct-Photoroom-removebg-preview2_fmlf4l.png"
              alt="Netflix Logo"
              className="h-[45px] w-auto"
            />
          
            <div className="flex gap-4 ml-5 mt-3 text-white">
                <p onClick={homeNavigation} className="cursor-pointer">Home</p>
                <p  className="cursor-pointer" onClick={popularNavigation}>Popular</p>
            </div>   
            <div className="flex w-[100vw] h-[10vh] justify-end">
                <input type="text" className="bg-black h-[5vh] border border-white mt-2 rounded-l-md text-white" onChange={(e)=>setSearchInput(e.target.value)}/>
                <label for="searchbox">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6  rounded-r-sm mt-2 text-white h-[34px] w-[28px] cursor-pointer bg-gray-500 border border-white text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </label>
            </div>
            <img src="https://i.postimg.cc/gcwC5MLM/Avatar.png" className="h-[5vh] mt-[6px] ml-4 w-[35px] cursor-pointer" onClick={goAccounts}/>
          </div>
        </div>  
      </nav>


      <div>
        {moviesList.length===0?
          <div className="flex flex-col justify-center h-[100vh] items-center bg-black ">
            <img src="https://res.cloudinary.com/dudjdf428/image/upload/v1754130805/Group_7394_fuha3y.png" className="h-[60vh] w-[40vw]"/>
            <p className='text-white mt-6 text-[20px]'>Your search for {searchInput} did not find any matches</p>
          </div>:
          <div className=" flex flex-wrap gap-5 ml-5 justify-center">
            {moviesList.map(movie => (
              <Link to={`/movieDetails/${movie.id}`} key={movie.id}>
                <img src={movie.poster_path} alt={movie.id} className="h-[190px] w-[254px] rounded-md"/>                      
              </Link>
              ))}  
          </div>}
          <footer className="p-10 gap-5 h-[19vh] w-full bg-black flex flex-col items-center justify-center">
            <div className="flex gap-5 ">
              <p className="text-white w-[2vw] h-[2vh]"><FaGoogle /></p>
              <p className="text-white w-[2vw] h-[2vh]"><FaTwitter /></p>
              <p className="text-white w-[2vw] h-[2vh]"><FaInstagram /></p>
              <p className="text-white w-[2vw] h-[2vh]"><FaYoutube /></p>
            </div>
            <p className="text-white">Contact Us</p>
          </footer>
      </div>

      
    </div>
  )
}

export default SearchPage
