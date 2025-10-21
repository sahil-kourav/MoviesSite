import React from 'react'
import Navbar from './components/Navbar'
import MoviesContent from './components/MoviesContent'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <>
    <div className='min-h-screen text-white'>
     <Navbar />
     <main>
      <MoviesContent />
     </main>
       <Footer />
       <ScrollToTop />
    </div>
    </>
  )
}

export default App