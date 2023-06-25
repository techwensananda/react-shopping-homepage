import React from 'react';

import { default as featured1, default as featured2, default as featured3 } from '../assets/img/featured1.png';

import featurebg from '../assets/img/featurebg.png';

const Features = () => {
  return (
    <> 
         <section className="featured section container" id="featured">
        <h2 className="section__title">Get started.</h2>
        <p>Use these Solana Foundation and community courses to begin your journey into Solana development.</p>
        <div className="featured_about-box">
            <img src={featurebg} alt="" className='featured_about-img' />
            <h3>Solana Development Course</h3>
            <p>Quickstart your Solana development starting from nothing to complex programs.</p>
        </div>

        <div className="featured__container grid">
          <article className="featured__card">
            <span className="featured__tag">Sale</span>

            <img src={featured1} alt="" className="featured__img" />

            <div className="featured__data">
              <h3 className="featured__title">Jazzmaster</h3>
              <span className="featured__price">$1050</span>
            </div>

            <button className="button featured__button">ADD TO CART</button>
          </article>

          <article className="featured__card">
            <span className="featured__tag">Sale</span>

            <img src={featured2} alt="" className="featured__img" />

            <div className="featured__data">
              <h3 className="featured__title">Ingersoll</h3>
              <span className="featured__price">$250</span>
            </div>

            <button className="button featured__button">ADD TO CART</button>
          </article>

          <article className="featured__card">
            <span className="featured__tag">Sale</span>

            <img src={featured3} alt="" className="featured__img" />

            <div className="featured__data">
              <h3 className="featured__title">Rose gold</h3>
              <span className="featured__price">$890</span>
            </div>

            <button className="button featured__button">ADD TO CART</button>
          </article>
          <article className="featured__card">
            <span className="featured__tag">Sale</span>

            <img src={featured1} alt="" className="featured__img" />

            <div className="featured__data">
              <h3 className="featured__title">Jazzmaster</h3>
              <span className="featured__price">$1050</span>
            </div>

            <button className="button featured__button">ADD TO CART</button>
          </article>

          <article className="featured__card">
            <span className="featured__tag">Sale</span>

            <img src={featured2} alt="" className="featured__img" />

            <div className="featured__data">
              <h3 className="featured__title">Ingersoll</h3>
              <span className="featured__price">$250</span>
            </div>

            <button className="button featured__button">ADD TO CART</button>
          </article>

          <article className="featured__card">
            <span className="featured__tag">Sale</span>

            <img src={featured3} alt="" className="featured__img" />

            <div className="featured__data">
              <h3 className="featured__title">Rose gold</h3>
              <span className="featured__price">$890</span>
            </div>

            <button className="button featured__button">ADD TO CART</button>
          </article>
        </div>
      </section></>
  )
}

export default Features