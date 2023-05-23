import React from 'react'
import { loginEndpoint } from '../../spotify'

export default function Login() {
  return (
    <div className="loginPage">
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmKX38PSi9J3Pi2eYrE-RIyMugwmOjjYhgwU3SJCaeL69T5S1JAT4jk_I1d3-pYjtyQ&usqp=CAU" alt="" srcset="" /> */}
    < a href={loginEndpoint}>
    <div className="loginBtn">Log In</div>
      </a> 
    </div>
  )
}
