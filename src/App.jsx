import React from 'react'
import Navbar from './components/Navbar'
import MoviesContent from './components/MoviesContent'

const App = () => {
  return (
    <>
    <div className='min-h-screen text-white'>
     <Navbar />
     <main>
      <MoviesContent />
     </main>
    </div>
    </>
  )
}

export default App