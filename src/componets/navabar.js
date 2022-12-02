import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './navbar.css'
function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = ()=>{
        if (window.innerWidth <= 960){
            setButton(false); 
             }else{
                setButton(true);
            }
        }

window.addEventListener('resize', showButton)

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'> 
            <Link to="/" className='navbar-logo'>
                CAMDESEG <i className='fab fa-typo3'/>
            </Link>
            <div className='menu-icon' onClick={handleClick} > 
              <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
            </div>

            <ul className={click? 'nav-menu  active' : 'nav-menu'}>
                {/*  Home redirect */}
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    home
                    </Link>
                </li>
                {/*  Servicsio redirect */}
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Servcios
                    </Link>
                </li>
                {/*  Home redirect */}
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Propductos
                    </Link>
                </li>

                {/*  Home redirect */}
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                    Ingresar
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Ingresar</Button>}
        </div>
    </nav>
    </>
  );
}

export default Navbar;