import React from 'react'
import {useState,useEffect} from 'react'
import Cookies from 'js-cookie';
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router';

import Slider from "react-slick";

import { Link } from 'react-router';
function Home() {
  const navigate=useNavigate();
  const [trendingMoviesList,setTrendingMoviesList]=useState([])
  const [trendingError, setTrendingError] = useState(false);
  const [orginalList,setOrginalList]=useState([])
  const [originalError, setOriginalError] = useState(false);
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
      const trendingMovies=async()=>{
        const token = Cookies.get('jwt_token');
        if(!token){
          navigate('/')
        }
        let url="https://apis.ccbp.in/movies-app/trending-movies"
        const options={
          method:"GET",
          headers: {
            Authorization: `Bearer ${token}`, 
          },
          
        }
        try {
          const response = await fetch(url, options);
          const data = await response.json();

          if (response.ok) {
            setTrendingMoviesList(data.results);
            setTrendingError(false);
            setLoading(false)
          }
          else {
            setTrendingError(true);
          }
        }
        catch{
          setTrendingError(true);
        } 
      }  
      trendingMovies()
  },[])
 useEffect(()=>{
      const orginalMovies=async()=>{
        const token = Cookies.get('jwt_token');
        if(!token){
          navigate('/')
        }
        let url="https://apis.ccbp.in/movies-app/originals"
        const options={
          method:"GET",
          headers: {
            Authorization: `Bearer ${token}`, 
          },
          
        }
        try {
          const response = await fetch(url, options);
          const data = await response.json();

          if (response.ok) {
            setOrginalList(data.results)
            setTrendingError(false);
            setLoading(false)
          }
          else {
            setOriginalError(true);
          }
        }
        catch{
          setOriginalError(true)
        } 
      }  
      orginalMovies()
  },[])
  const popularPage=()=>{
    navigate('/popular')
  }
  const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,   // number of slides to show at once
  slidesToScroll: 1, // number of slides to scroll
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
    
  ]
  
};
const searchPageIcon=()=>{
  navigate('/search')
}
const goAccounts=()=>{
  navigate('/accounts')
}

  return (
    
    <div>
      <nav className=" flex flex-col  w-full  px-[4%] py-5 relative z-10 h-[90vh] bg-cover bg-[url('https://res.cloudinary.com/dudjdf428/image/upload/v1754038030/Image_2_x6q60d.png')]">
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-2 ml-auto text-white h-[4vh] cursor-pointer" onClick={searchPageIcon}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <img src="https://i.postimg.cc/gcwC5MLM/Avatar.png" className="h-[5vh] mt-[5px] ml-4 w-[35px] cursor-pointer" onClick={goAccounts}/>
            </div>
          </div>
        </div>
          <div className=" p-8 ">
            <p className="text-white text-[60px] font-[500]">Super Man</p>
            <p className="text-white w-[23vw] text-[20px] mt-4 mb-4">
              Superman is a fictional superhero who first appeared in American comic books published by DC Comics.
            </p>
            <button className="bg-white p-2 rounded-md mt-2 w-[4vw]">
              Play
            </button>
          </div>
        
        
      </nav>
      <div className="bg-black h-[95vh] p-10 ">
        <p className="text-white ml-5 text-[20px] font-[500]">Trending Now</p>
        {loading? 
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-t-transparent border-red-500 rounded-full animate-spin"></div>
        </div>:(
          <div>
          {trendingError ? 
            <div>
              <img src="https://res.cloudinary.com/dudjdf428/image/upload/v1754138507/6076393_telgzb.jpg" className="h-[48px] w-[48px] flex justify-self-center"/>
              <p className="text-white text-center mt-4">Something went wrong. Please try again</p>
              <button className='bg-white flex justify-self-center mt-2 p-1 rounded-sm'>Try Again</button>
            </div>
           : 
          <Slider {...sliderSettings}>
            {trendingMoviesList.map(movie => (
              <Link to={`/movieDetails/${movie.id}`} key={movie.id}>
                <div className="ml-5 mt-5">
                  <img src={movie.poster_path} alt={movie.id} className="h-[190px] w-[254px] rounded-md"/>
                </div>
              </Link>
              ))}
          </Slider>
          }
        </div>  
        )}
         

         
        <p className="text-white ml-5 text-[20px] font-[500] mt-2">Originals</p>
        {loading?
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-t-transparent border-red-500 rounded-full animate-spin"></div>
        </div>:(
          <div>
          {originalError ? 
              <div>
                <img src="https://res.cloudinary.com/dudjdf428/image/upload/v1754138507/6076393_telgzb.jpg" className="h-[48px] w-[48px] flex justify-self-center"/>
                <p className="text-white text-center mt-4">Something went wrong. Please try again</p>
                <button className='bg-white flex justify-self-center mt-2 p-1 rounded-sm'>Try Again</button>
              </div>
            : 
            <Slider {...sliderSettings}>
              {orginalList.map(movie => (
                <Link to={`/movieDetails/${movie.id}`} key={movie.id}>
                  <div className="ml-5 mt-5">
                    <img src={movie.poster_path} alt={movie.id} className="h-[190px] w-[254px] rounded-md"/>
                  </div>
                </Link>
                ))}
            </Slider>
            }
          </div>
        )}
        
          
        <footer className=" gap-5   flex flex-col items-center justify-center mt-7">
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
