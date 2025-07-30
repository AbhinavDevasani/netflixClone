import React from 'react'
import {useState,useEffect} from 'react'
import Cookies from 'js-cookie';
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router';
function Home() {
  const navigate=useNavigate();
  const [trendingMoviesList,setTrendingMoviesList]=useState([])
  const [orginalList,setOrginalList]=useState([])
  useEffect(()=>{
    const trendingMovies=async()=>{
      const token = Cookies.get('jwt_token');
      let url="https://apis.ccbp.in/movies-app/trending-movies"
      const options={
        method:"GET",
        headers: {
          Authorization: `Bearer ${token}`, // add Authorization header
        },
        
      }
      let response=await fetch(url,options)
      let data=await response.json()
      if(response.ok){
        setTrendingMoviesList(data.results)
        
      }
      
    }
    trendingMovies()
  },[])
  useEffect(()=>{
    const orginalMovies=async()=>{
      let token=Cookies.get("jwt_token")
      let url="https://apis.ccbp.in/movies-app/originals"
      let options={
        method:"GET",
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
      let response=await fetch(url,options)
      let data=await response.json()
      if(response.ok){
        setOrginalList(data.results)
      }
    }
    orginalMovies()

  },[])
  const popularPage=()=>{
    navigate('/popular')
  }
  return (
    
    <div>
      <nav className=" flex w-full  px-[4%] py-5 relative z-10 h-[60vh] bg-cover bg-[url('https://flipthetruck.wordpress.com/wp-content/uploads/2013/06/man-of-steel-banner.png')]">
        <div className="flex flex-column  w-full ">
          <div className="w-full flex">
            <img
              src="https://res.cloudinary.com/dnns0cphq/image/upload/v1727864135/netflix_logo_direct-Photoroom-removebg-preview2_fmlf4l.png"
              alt="Netflix Logo"
              className="h-[45px] w-auto"
            />
          
            <div className="flex gap-4 ml-5 mt-3 text-white">
                <p>Home</p>
                <p onClick={popularPage} className="cursor-pointer">Popular</p>
            </div>
          
            <div className="flex w-[100vw] h-[10vh] justify-items-end">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-3 ml-auto text-white h-[4vh]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

            </div>
          </div>
          <div className="flex items-center justify-items-start">
            <p>Super Man</p>
          </div>
        </div>
        
      </nav>
      <div className="bg-black h-[93vh] p-10">
          <p className="text-white ml-5 text-[20px] font-[500]">Trending Now</p>
          
          <div className="flex">
            {trendingMoviesList.map(movie=>{
              return(
                <div className="ml-5 mt-5" key={movie.id}>
                  <img src={movie.poster_path} alt={movie.id} className="h-[25vh] w-[20vw]"/>
                  
                </div>
              )
            })}
        </div>
        <p className="text-white ml-5 text-[20px] font-[500] mt-2">Orginals</p>
          <div className="flex">
            {orginalList.map(orginal=>{
              return(
                <div className="ml-5 mt-5" key={orginal.id}>
                  <img src={orginal.poster_path} alt={orginal.id} className="h-[25vh] w-[20vw]"/>
                  
                </div>
              )
            })}
        </div>
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

export default Home
