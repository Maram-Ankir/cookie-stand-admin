import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
export default function CookieStandAdmin(props) {
    return (
        <div>
     <Head/>
      <Header/>
      <Main />
      <Footer/> 
        </div>
    )
}
