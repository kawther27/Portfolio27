import React, { Children } from 'react'
import Header from './Header'
import Footer from './Footer'
function Layout({Children}) {
  return (
     <div className="d-flex flex-column min-vh-100">
        <Header/>
        <main className="flex-grow-1">
         {Children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout