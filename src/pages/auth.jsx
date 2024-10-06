import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Login from '../components/login'
import Signup from '../components/signup'

const Auth = () => {
  const [searchParams] = useSearchParams()
  const url = searchParams.get('createNew')
  const [currPage, setCurrPage] = useState("login")

  return (
    <section className='py-12'>
      <h1 className='text-center md:text-5xl text-2xl font-bold mb-10'>
        {
          url ? "Hold Up ! Let's Login First.." : 'Login/Signup'
      }
      </h1>
      <div className='flex items-center justify-center'>
       {
         ["login","signup"].map((btn,index)=>{
          return <button className={`btn md:btn-wide  ${btn===currPage && 'btn-primary'}`} key={index} onClick={()=>setCurrPage(btn)}>{btn}</button>
        })
       }
      </div>
      <div className='max-w-lg mx-auto my-12 px-5 md:px-0'>
        {
          currPage === "login" ? <Login /> : <Signup />
        }
      </div>

    </section>
  )
}

export default Auth
