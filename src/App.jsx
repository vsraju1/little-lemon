import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>Nav Logo</li>
        </ul>
      </nav>
    </header>
    </>
  )
}

const Main = () => {
  return (
    <>
    <main>This is main element</main>
    </>
  )
}

const Footer = () => {
  return (
    <>
    <footer>This is footer element</footer>
    </>
  )
}



function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
