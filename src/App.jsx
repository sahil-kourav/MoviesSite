import React from 'react'
import Navbar from './components/Navbar'
import MoviesContent from './components/MoviesContent'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <div className='min-h-screen text-white'>
     <Navbar />
     <main>
      <MoviesContent />
     </main>
       <Footer />
    </div>
    </>
  )
}

export default App