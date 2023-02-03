import React from 'react'
import './App.scss'
import { About, Footer, Header, Skills, Testimonials, Work } from './container'
import NavBar from './components/NavBar/NavBar'
const App = () => {
    return (
        <div className='app'>
            <NavBar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default App
