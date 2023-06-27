import React, { useEffect, useState } from "react";
import { loginEndpoint } from "../../spotify";
import "./auth.scss";
// import {required} from "browser"

export default function Login() {
  return (
    <>
      <div className='Loginconatiner'>
        <div className='itemBox'>
          <img src= 'src/assets/images.png' alt='' srcset='' />
          <a href={loginEndpoint}>
            <div className='buttonLogin'>Connect to Spotify</div>
          </a>
        </div>
      </div>
    </>
  );
}
