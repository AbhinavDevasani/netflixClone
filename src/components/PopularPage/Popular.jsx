import React from 'react'
import { useNavigate } from 'react-router'
import {useState,useEffect} from 'react'
import Cookies from 'js-cookie'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Popular() {
    const navigate=useNavigate()
    const homePage=()=>{
        navigate('/home')
    }
    const [popularList,setPopularList]=useState([])
    useEffect(()=>{
        const popularMovies=async()=>{
            const token=Cookies.get('jwt_token')
            let url="https://apis.ccbp.in/movies-app/popular-movies"
            let options={
                method:"GET",
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
            let response=await fetch(url,options)
            let data=await response.json()
            if(response.ok){
                setPopularList(data.results)
            }
        }
        popularMovies()
    },[])
    const searchPageIcon=()=>{
      navigate('/search')
    }
  return (
    <div className=" bg-black">
        <nav className=" flex w-full  px-[4%] py-5 relative z-10 ">
        <div className="flex flex-column  w-full ">
          <div className="w-full flex">
            <img
              src="https://res.cloudinary.com/dnns0cphq/image/upload/v1727864135/netflix_logo_direct-Photoroom-removebg-preview2_fmlf4l.png"
              alt="Netflix Logo"
              className="h-[45px] w-auto"
            />
          
            <div className="flex gap-4 ml-5 mt-3 text-white">
                <p onClick={homePage} className="cursor-pointer">Home</p>
                <p className="cursor-pointer">Popular</p>
            </div>
          
            <div className="flex w-[100vw] h-[10vh] justify-items-end">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-3 ml-auto text-white h-[4vh] cursor-pointer" onClick={searchPageIcon}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

            </div>
          </div>
          
        </div>
        
        </nav>
        <div className="flex flex-wrap gap-10 justify-center">    
                {popularList.map(popular=>{
                    return <img src={popular.poster_path} key={popular.id} className="h-[25vh] w-[15vw] rounded-lg"/>
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
  )
}

export default Popular
