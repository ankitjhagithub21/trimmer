import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Auth = () => {
  const [searchParams] = useSearchParams()
  const url = searchParams.get('createNew')
  return (
    <div>
      {
        url  ? <div>Hold Up ! Let's Login First..</div> : <div>Login/SignUp</div>
      }
    </div>
  )
}

export default Auth
