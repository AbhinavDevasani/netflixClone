import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const MovieDetails=()=> {
    const [movieDetailedViewList,setMovieDetailedView]=useState(null)
    const [adultMovie,setAdultMovie]=useState(true)
    
    const navigate=useNavigate()
    const {id}=useParams()
    useEffect(()=>{
        const movieDetailedView=async()=>{
            const token=Cookies.get("jwt_token")
            if(!token){
                navigate('/')
            }
            let url=`https://apis.ccbp.in/movies-app/movies/${id}`
            let options={
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
            let response=await fetch(url,options)
            let data=await response.json()
            if(response.ok){
                setMovieDetailedView(data.movie_details)
                setAdultMovie(data.movie_details.adult)
                
            }
        }
        movieDetailedView()
    },[])
    const goAccounts=()=>{
        navigate('/accounts')
    }
    const searchPageIcon=()=>{
        navigate('/search')
    }
    const popularPage=()=>{
        navigate('/popular')
    }
    const homePage=()=>{
        navigate('/home')
    }
    
  return (
    <div className="w-full h-[70vh] bg-cover bg-center relative"
        style={{
            backgroundImage: movieDetailedViewList
            ? `url(${movieDetailedViewList.backdrop_path})`
            : 'none',
        }}>
      
        <nav className="flex flex-col w-full px-[4%] py-5 relative z-10 h-[13vh] bg-cover  bg-black/40 ">
            <div className="flex flex-col w-full">
                <div className="w-full flex ">
                
                <img
                    src="https://res.cloudinary.com/dnns0cphq/image/upload/v1727864135/netflix_logo_direct-Photoroom-removebg-preview2_fmlf4l.png"
                    alt="Netflix Logo"
                    className="h-[45px] w-auto"
                />

                
                <div className="flex gap-4 ml-5 mt-3 text-white">
                    <p className="cursor-pointer" onClick={homePage}>Home</p>
                    <p onClick={popularPage} className="cursor-pointer">Popular</p>
                </div>

                
                <div className="flex w-[100vw] h-[10vh] justify-items-end">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 mt-2 ml-auto text-white h-[4vh] cursor-pointer"
                    onClick={searchPageIcon}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                    </svg>
                    <img
                    src="https://i.postimg.cc/gcwC5MLM/Avatar.png"
                    className="h-[5vh] mt-[5px] ml-4 w-[35px] cursor-pointer"
                    onClick={goAccounts}
                    />
                </div>
                </div>
            </div>
        </nav>
        <div className="p-10">
        {movieDetailedViewList && (
            <div>
            <p className="text-white text-[39px] font-[500]">{movieDetailedViewList.title}</p>
            <div className="flex gap-3 text-white font-[500]">
                <p>{movieDetailedViewList.runtime} min</p>
                {
                    adultMovie ?<p>18+</p> :<p className="border-1 border-white text-white w-[4vw] text-center">U/A</p>
                    
                }
                <p>{movieDetailedViewList.release_date}</p>
            </div>
            <p className="text-white w-[70vw] text-[20px] mt-4 mb-4">{movieDetailedViewList.overview}</p>
            
            
            <button className="bg-white p-2 rounded-md mt-2 w-[6vw]">Play</button>
            </div>
        )}
        </div>
        <div className="bg-black">
            <div className="bg-black py-6 px-4">
                <div className="flex justify-center">
                    <div className="flex justify-between w-full max-w-5xl text-white">
                        <div>
                            <p className="text-[#94A3B8] text-sm font-semibold mb-1">Genres</p>
                            {movieDetailedViewList?.genres?.map((genre) => (
                            <p key={genre.id} className="text-sm mb-[2px]">{genre.name}</p>
                            ))}
                        </div>
                        <div>
                            <p className="text-[#94A3B8] text-sm font-semibold mb-1">Audio Available</p>
                            {movieDetailedViewList?.spoken_languages?.map((lang, idx) => (
                            <p key={idx} className="text-sm mb-[2px]">{lang.english_name}</p>
                            ))}
                        </div>
                        <div>
                            <p className="text-[#94A3B8] text-sm font-semibold mb-1">Rating Count</p>
                            <p className="text-sm mb-2">{movieDetailedViewList?.vote_count?.toLocaleString()}</p>
                            <p className="text-[#94A3B8] text-sm font-semibold mb-1">Rating Average</p>
                            <p className="text-sm">{movieDetailedViewList?.vote_average}</p>
                        </div>
                        <div>
                            <p className="text-[#94A3B8] text-sm font-semibold mb-1">Budget</p>
                            <p className="text-sm mb-2">₹{movieDetailedViewList?.budget?.toLocaleString()}</p>
                            <p className="text-[#94A3B8] text-sm font-semibold mb-1">Release Date</p>
                            <p className="text-sm">
                            {new Date(movieDetailedViewList?.release_date).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            })}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="text-white p-5">
            <p className="text-[25px] ml-2 font-[500]">Similar Movies</p>
            <div className="flex-wrap flex gap-10 ml-2 mt-2">
                
                {movieDetailedViewList?.similar_movies?.map(movie=>{
                    return<div>
                        
                        <img src={movie.poster_path} alt={movie.id} className="h-[190px] w-[254px] rounded-md"/>       
                    </div>
                })}
            </div>
            </div>
            <footer className=" gap-5  flex flex-col items-center justify-center mt-7">
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

export default MovieDetails
