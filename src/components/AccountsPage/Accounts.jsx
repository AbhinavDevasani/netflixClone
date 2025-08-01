import React from 'react'
import { useNavigate } from 'react-router'
import Cookies from 'js-cookie'

function Accounts() {
    const navigate=useNavigate()
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
  return (
    <>
    <div className="bg-black">
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
                <p className="cursor-pointer" onClick={popularPage}>Popular</p>
            </div>
          
            <div className="flex w-[100vw] h-[10vh] justify-items-end">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-3 ml-auto text-white h-[4vh] cursor-pointer" onClick={searchPageIcon}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <img src="https://i.postimg.cc/gcwC5MLM/Avatar.png" className="h-[5vh] mt-[5px] ml-4 w-[35px] cursor-pointer"/>

            </div>
          </div>
          
        </div>
        
        </nav>
    </div>
    <div className="p-10">
        <p className="text-[30px] p-3">Accounts </p>
        <hr className="w-[94vw] flex justify-self-center mt-3 text-gray-500"/>
        <div className="p-3 flex" >
            <p className="text-gray-400 text-[20px]">Member ship</p>
            <div>
                <p className="text-[20px] ml-4">rahul@gmail.com</p>
                <p className='text-[20px] ml-4'>Password:<span className="text-gray-400">**********</span></p>
            </div>
        </div>
        <hr className="w-[94vw] flex justify-self-center mt-3"/>
        <div className="p-3 flex" >
            <p className="text-gray-400 text-[20px]">Plan details</p>
            <div className="flex">
                <p className="text-[20px] ml-4">Premium</p>
                <button className="ml-4 border p-1">Ultra HD</button>
            </div>
        </div>
        <hr className="w-[94vw] flex justify-self-center mt-3"/>
        <button className='bg-red-600 flex justify-self-center mt-5 p-2 text-white rounded-md cursor-pointer' onClick={logOut}>Logout</button>
    </div>
    </>
  )
}

export default Accounts
