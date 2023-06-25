import React from 'react'
import home from '../assets/img/home.png'

const Home = () => {
    return (
        <> 
        <section className="home" id="home">
          <div className="home__container container grid">
            <div className="home__img-bg">
              <img src={home} alt="" className="home__img" />
            </div>
  
            
  
            <div className="home__data">
              <h1 className="home__title">
             
                Developer  <br /> Resources
              </h1>
              <p className="home__description">
              A manual for joining the Solana ecosystem. By builders for builders.
              </p>
         
  
              <div className="home__btns">
                <a href="#" className="button home__button button__solana">
                Build Now
                </a>
  
                <button className="button home__button transparent__button">Stack Exchange</button>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Home