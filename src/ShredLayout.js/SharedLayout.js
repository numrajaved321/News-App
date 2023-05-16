import React from 'react'
import Header from "../Layout/Header"

import {Link, Outlet} from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
     <Header/>

   <Outlet/>

    </>
  )
}

export default SharedLayout