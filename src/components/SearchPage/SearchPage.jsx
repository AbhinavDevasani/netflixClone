import React from 'react'
import { useState,useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'
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
  useEffect(()=>{
    const searchMovies=async()=>{
        const token=Cookies.get('jwt_token')
        const url = `https://apis.ccbp.in/movies-app/movies-search?search=${searchInput}`;
        
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
    <div className="bg-black  w-full">
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
          </div>
        </div>
          
        
        
      </nav>
      <div className=" flex flex-wrap gap-5 ml-5">
        {moviesList.map((movies)=>{
            return(
                <div id={movies.id}>
                    <img src={movies.poster_path} className="h-[25vh] w-[15vw] rounded-lg"/>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default SearchPage
