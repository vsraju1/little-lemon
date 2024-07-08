import { Link } from "react-router-dom"
import 'remixicon/fonts/remixicon.css'
import './Header.css'
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const linkToggleMenu = () => {
    setIsMenuOpen(false)
  }
    return (
      <>
      <header>

        {/* Logo  */}
        <div className={`${isMenuOpen ? 'displayHidden' : 'logo'}`}>Little Lemon</div>

        {/* Burger Menu  */}
        {!isMenuOpen && <i className="ri-menu-line" onClick={toggleMenu}></i>}

        {/* Nav bar  */}
        <nav className={`${isMenuOpen ? 'mobileMenuActive' : ""}`}>
          <h1 className="closeMenu" onClick={toggleMenu}>X</h1>
          <ul>
            <li><Link to="/" onClick={linkToggleMenu}>Home</Link></li>
            <li><Link to="/" onClick={linkToggleMenu}>Menu</Link></li>
            <li ><Link to="/booking" className="orderButton" onClick={linkToggleMenu}>Book a table</Link></li>
            <li><Link to="/" onClick={linkToggleMenu}>Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      </>
    )
}

export default Header