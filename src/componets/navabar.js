import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
    <nav className='NavBar'>
        <div className='Navbar-container'> 
            <Link to="/" className='navbar-logo'>
                CAMSEG <i className='fab fa-typo3'/>
            </Link>
            <div className='menu-icon' onClick={handleClick} > 
              <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
            </div>

            <ul className={click? 'nav-menu  active' : 'nav-menu'}>
                {/*  Home redirect */}
                <li className='nav-time'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    home
                    </Link>
                </li>
                {/*  Servicsio redirect */}
                <li className='nav-time'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Servcios
                    </Link>
                </li>
                {/*  Home redirect */}
                <li className='nav-time'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Propductos
                    </Link>
                </li>

                {/*  Home redirect */}
                <li className='nav-time'>
                    <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                    Ingresar
                    </Link>
                </li>
            </ul>

        </div>
    </nav>
    </>
  );
}

export default Navbar;