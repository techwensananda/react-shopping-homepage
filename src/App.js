import { useEffect, useState } from 'react';
import './App.css';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import SideCart from './components/SideCart';
import Home from './pages/Home';


function App() {
  const[showCart,setShowCart]=useState(false)
  const toggleCart=()=>setShowCart(prev=>!prev)


  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector(
          `.nav__menu a[href*=${sectionId}]`
        );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionsClass.classList.add('active-link');
        } else {
          sectionsClass.classList.remove('active-link');
        }
      });
    };

    window.addEventListener('scroll', scrollActive);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
  <>

 <Header toggleCart={toggleCart}/>
{/* <SideCart  toggleCart={toggleCart} showCart={showCart} /> */}
  <main className="main">

   <Home />
   <Features />
   <SideCart   toggleCart={toggleCart} showCart={showCart}  />


 
   
 
  </main>

<Footer/>
 


      

    
  </>
  );
}

export default App;
