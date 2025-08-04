import React from 'react'
import { useNavigate } from 'react-router'
import Cookies from 'js-cookie'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState } from 'react';
function Accounts() {
    const navigate=useNavigate()
    const[menuOpen,setMenuOpen]=useState(false)
    
     const searchPageIcon=()=>{
      navigate('/search')
    }
    const homePage=()=>{
        navigate('/home')
    }
    const popularPage=()=>{
    navigate('/popular')
  }

  const logOut=()=>{
    Cookies.remove('jwt_token')
    navigate('/')
  }
  const toggleMenu=()=>{
    setMenuOpen(prev=>!prev)
  }
  return (
    <>
    <nav className="bg-black">
      <nav className=" flex w-full  px-[4%] py-5 relative z-10  h-[9vh] sm:h-[15vh]">
        <div className="flex flex-column  w-full ">
          <div className="w-full flex">
            <img
              src="https://res.cloudinary.com/dnns0cphq/image/upload/v1727864135/netflix_logo_direct-Photoroom-removebg-preview2_fmlf4l.png"
              alt="Netflix Logo"
              className="h-[45px] w-auto cursor-pointer"
              onClick={homePage}
            />
          
            <div className="text-white hidden sm:block">
              <div className='flex  gap-4 ml-5 mt-3'>
                <p>Home</p>
                <p onClick={popularPage} className="cursor-pointer">Popular</p>
              </div>
            </div>
          
            <div className="flex w-[100vw] h-[10vh] justify-items-end">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-3 ml-auto text-white h-[4vh] cursor-pointer hidden sm:block" onClick={searchPageIcon}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <img src="https://i.postimg.cc/gcwC5MLM/Avatar.png" className="h-[5vh] mt-[5px] ml-4 w-[35px] cursor-pointer hidden sm:block"/>
              <img src="https://res.cloudinary.com/dudjdf428/image/upload/v1754295982/add-to-queue_1_cynvod.png" className="h-[4vh] mt-[5px] ml-4 w-[30px] cursor-pointer sm:hidden flex justify-self-end" onClick={toggleMenu}/>

            </div>
          </div>
          
        </div>
        
        </nav>
      {menuOpen&&
        <div className="flex flex-row ml-10 text-white mb-3">
          <div>
            <p onClick={homePage} className="cursor-pointer mb-1">Home</p>
            <p onClick={popularPage} className='cursor-pointer'>Popular</p>
            <p className="cursor-pointer font-[500] mb-1 text-[18px] ">Account</p>
          </div>
        </div>}
        
    </nav>
    <div className="sm:p-10 h-[76vh] w-full">
        <p className="sm:text-[30px] p-3 text-[25px]">Accounts </p>
        <hr className="sm:w-[94vw] flex justify-self-center mt-3 text-gray-500 w-[90vw]"/>
        <div className="p-3 flex" >
            <p className="text-gray-400 sm:text-[20px] text-[17px]">Member ship</p>
            <div>
                <p className="sm:text-[20px] ml-4 text-[17px]">rahul@gmail.com</p>
                <p className='sm:text-[20px] ml-4 text-[17px]'>Password:<span className="text-gray-400">**********</span></p>
            </div>
        </div>
        <hr className="sm:w-[94vw] flex justify-self-center mt-3 w-[90vw]"/>
        <div className="p-3 flex" >
            <p className="text-gray-400 sm:text-[20px] text-[17px]">Plan details</p>
            <div className="flex">
                <p className="sm:text-[20px] ml-4 text-[17px]">Premium</p>
                <button className="ml-4 border p-1">Ultra HD</button>
            </div>
        </div>
        <hr className="sm:w-[94vw] flex justify-self-center mt-3 w-[90vw]"/>
        <button className='bg-red-600 flex justify-self-center mt-5 p-2 text-white rounded-md cursor-pointer' onClick={logOut}>Logout</button>
        
    </div>
    <footer className=" gap-5 flex flex-col items-center justify-center mt-7 bg-black h-[15vh]">
      <div className="flex gap-5 ">
        <p className="text-white w-[2vw] h-[2vh]"><FaGoogle /></p>
        <p className="text-white w-[2vw] h-[2vh]"><FaTwitter /></p>
        <p className="text-white w-[2vw] h-[2vh]"><FaInstagram /></p>
        <p className="text-white w-[2vw] h-[2vh]"><FaYoutube /></p>
      </div>
      <p className="text-white">Contact Us</p>
    </footer>
    </>
  )
}

export default Accounts
