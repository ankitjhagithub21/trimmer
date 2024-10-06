import React, { useState } from 'react'
import Accordian from '../components/Accordian'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [longUrl ,setLongUrl ] = useState('')
  const navigate = useNavigate()
  const handleShorten = (event) =>{
    event.preventDefault()
    if(longUrl){
        navigate(`/auth?createNew=${longUrl}`)
    }
  }
  return (
    <>
    <section className='text-center px-5 my-12'>
      <h1 className='lg:text-5xl md:text-3xl text-2xl font-bold my-12'>
        The Only URL Shortner <br /> you &rsquo;ll ever need! 👇
      </h1>
      <form onSubmit={handleShorten} className='flex md:flex-row flex-col md:items-center gap-3 justify-center my-12'>
        <input type='text' value={longUrl} onChange={(e)=>setLongUrl(e.target.value)} placeholder='Enter long url' className='input input-primary w-full max-w-xl' />
        <button className='btn btn-warning' type='submit'>Shorten Url</button>
      </form>
      <p className='md:text-2xl text-lg md:w-3/4 w-full mx-auto'>ShortURL is a free tool to shorten URLs and generate short links
      URL shortener allows to create a shortened link making it easy to share</p>
      <div>
        <img src="/banner.jpeg" alt="banner" className='md:w-3/4 mx-auto w-full my-12 rounded-lg' />
      </div>
    </section>
    <Accordian/>
    </>

  )
}

export default Home
