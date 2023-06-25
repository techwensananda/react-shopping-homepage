import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsMoonStars, BsUiChecksGrid } from 'react-icons/bs';
import { LuSunMoon } from 'react-icons/lu';
import logo from '../assets/img/logo.png';
const Header = ({toggleCart}) => {
const[menuShow,setMenuShow]=useState(false)
const[isDarkTheme,setIsDarkTheme]=useState(true)
const toggleMenu=() => setMenuShow(prev=>!prev);

const [isScrollValueMoreThanHeaderHeight, setIsScrollValueMoreThanHeaderHeight] = useState(false);

//here 96(px) - height of current header

useEffect(() => {
    const handleScroll = () => {
        setIsScrollValueMoreThanHeaderHeight(window.scrollY > 96);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
},[])

const handleDarkTheme=()=>{
  if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme');
    setIsDarkTheme(true)

  }else{
    document.body.classList.add('dark-theme');
    setIsDarkTheme(false)

  }
}




  return (
    <>
    
  



<header className={`header ${isScrollValueMoreThanHeaderHeight ? 'scroll-header' :''}`} id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    <img src={logo} /> 
                </a>

                <div className={`nav__menu ${menuShow ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#featured" className="nav__link">Featured</a>
                        </li>
                        <li className="nav__item">
                            <a href="#products" className="nav__link">Products</a>
                        </li>
                        <li className="nav__item">
                            <a href="#new" className="nav__link">New</a>
                        </li>
                    </ul>

                    <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                        <AiOutlineClose></AiOutlineClose>
                    </div>
                </div>

                <div className="nav__btns">
              
                  

                  {  isDarkTheme ?   <BsMoonStars  onClick={handleDarkTheme} /> : <LuSunMoon  onClick={handleDarkTheme} />}

                    <div className="nav__shop" id="cart-shop" onClick={toggleCart}>
                        <AiOutlineShoppingCart></AiOutlineShoppingCart>
                    </div>

                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <BsUiChecksGrid></BsUiChecksGrid>
                    </div>
                </div>
            </nav>
        </header>

    </>
  )
}

export default Header