import React from 'react'
import { loginURL } from '../../spotify'
import './style.css'
function Login() {
  return (
    <div className='login'>
    {console.log("🐱🐱")}
        <div className="logo">
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="" />
        </div>
        <a href={loginURL}>Login with Spotify</a>
    </div>
  )
}

export default Login