import './home.scss'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Library from '../Library/Library'
import Sidebar from '../../component/sideBar/Sidebar'
import Feed from '../Feeds/Feed'
import Favorite from '../Favrouite/favourite'
import Player from '../Player/Player'
import Trending from '../Trending/Trending'
import Login from '../auth/Login'
import { setClientToken } from '../../spotify'
export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash; // taking hash 
    const token = window.localStorage.getItem("token");  // geting token from the storage
    window.location.hash="" // after storing the hash set to empty string
    if (!token && hash) { // AGAR TOKEN  present nahior hash hoga to tab hi local storage me dalna nahi to waha par jarur hoga 
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token)
      setClientToken(_token)
    }
    else{
      setToken(token)
      setClientToken(token)
    }
    
  },[]);
  return (!token ? (<Login />) : (
    <BrowserRouter>
      <div className="mianBoady">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Library />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/fav' element={<Favorite />} />
          <Route path='/player' element={<Player />} />
          <Route path='/trend' element={<Trending />} />
        </Routes>
      </div>
    </BrowserRouter>)
  )
}

