import Header from './Header';
import {Outlet} from "react-router-dom";
import React,{ useState,useEffect } from 'react';

const Home = () => {
  const [posts,setPosts] = useState([10])
  
  return (
    <>
    <Header/>
    <Outlet/>
    {posts}
    </>
  )
}

export default Home