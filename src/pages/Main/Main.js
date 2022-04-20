import React from 'react';
import classes from './Main.module.css'
import clsx from "clsx"
import {Link} from "react-router-dom"

import dish_1 from '../../assets/images/image 2.png'
import mobApplication from '../../assets/images/Rectangle.png'

const Main = () => {
  return (
    <div className={classes.main}>
      <section className={clsx(classes.promo, 'flex items-center')}>
        <div className={clsx('container mx-auto')}>
          <h1 className={clsx(classes.promoTitle)}>Food Tastes Best When <br/> It's On Time</h1>
          <span>Order now</span>
          <div className={clsx('w-full flex justify-center', classes.discoverWrapper)}>
            <input type="text" placeholder="Enter your delivery location"/>
            <button>Discover</button>
          </div>
        </div>
      </section>
      <section className={clsx(classes.popular, 'py-10')}>
        <div className={clsx('container mx-auto py-20')}>
          <div className={clsx(classes.divideLine)}/>
          <h2>Our Popular Dishes</h2>
          <p>Best cooks and best delivery guys all at your service.</p>
        </div>
        <section className={clsx(classes.dishes)}>
          <div className={clsx('container mx-auto')}>
            <div className={clsx('grid grid-cols-3 py-10')}>
              <div className={clsx(classes.dish, 'col-span-1 mx-auto')}>
                <img src={dish_1} alt="" className={clsx(classes.dishImage)}/>
                <p>Veggie tomato mix</p>
                <span>N1,900</span>
              </div>
              <div className={clsx(classes.dish, 'col-span-1 mx-auto')}>
                <img src={dish_1} alt="" className={clsx(classes.dishImage)}/>
                <p>Veggie tomato mix</p>
                <span>N1,900</span>
              </div>
              <div className={clsx(classes.dish, 'col-span-1 mx-auto')}>
                <img src={dish_1} alt="" className={clsx(classes.dishImage)}/>
                <p>Veggie tomato mix</p>
                <span>N1,900</span>
              </div>
            </div>
            <div className={clsx('grid grid-cols-3 py-10')}>
              <div className={clsx(classes.dish, 'col-span-1 mx-auto')}>
                <img src={dish_1} alt="" className={clsx(classes.dishImage)}/>
                <p>Veggie tomato mix</p>
                <span>N1,900</span>
              </div>
              <div className={clsx(classes.dish, 'col-span-1 mx-auto')}>
                <img src={dish_1} alt="" className={clsx(classes.dishImage)}/>
                <p>Veggie tomato mix</p>
                <span>N1,900</span>
              </div>
              <div className={clsx(classes.dish, 'col-span-1 mx-auto')}>
                <img src={dish_1} alt="" className={clsx(classes.dishImage)}/>
                <p>Veggie tomato mix</p>
                <span>N1,900</span>
              </div>
            </div>
          </div>
        </section>
        <div className={clsx('w-full flex justify-center')}>
          <Link to={'/more'}><span className={clsx(classes.seeMore)}>See more </span></Link>
        </div>
      </section>
      <section className={clsx(classes.location)}>
        <div className={clsx('container mx-auto py-20')}>
          <div className={clsx('grid grid-cols-6 py-10')}>
            <div className={clsx('col-span-2 mx-auto', classes.locationText)}>
              <span>Our Restaurants</span>
              <p>Check the location on the map of nearby restaurants</p>
              <p>Shop for your favorite meals or drinks
                and enjoy while doing it.</p>
            </div>
            <div className={clsx('col-span-4 flex justify-end')}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.059537108682!2d71.41445653031921!3d51.08890874193011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585a605525605%3A0x4dff4a1973f7567e!2sAstana%20IT%20University!5e0!3m2!1sru!2skz!4v1650454535050!5m2!1sru!2skz"
                width="80%" height="450" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
      <section className={clsx(classes.mobApplication)}>
        <div className={clsx('container mx-auto py-20')}>
          <div className={clsx('grid grid-cols-6 py-10')}>
            <div className={clsx('col-span-3 mx-auto')}>
              <img src={mobApplication} alt=""/>
            </div>
            <div className={clsx('col-span-3', classes.locationText)}>
              <span>Our Mobile App</span>
              <p>Download Our Mobile App</p>
              <p>Food Tastes Best When It's On Time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
