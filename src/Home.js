import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
return (
<div className="home">
    <div className="home__container">
        <img
            className="home__image"
            // src="https://m.media-amazon.com/images/I/615e7BNVRnL._SR3000,600_.jpg"
            src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2022/Q3/Onsite/StoreFronts/2022Q3_HCT_Storefront_Hero_NewTraditional_D_1500x500_EN.jpg"
            // src='https://m.media-amazon.com/images/I/61cTQJfzyaL._SX3000_.jpg'
            alt=""
        />
    </div>
    <div className="home__row">
        <Product
        id="12321341"
        title="iRobot Vacuum - Wi-Fi Connected, Smart Mapping, Works with Alexa, Precision Jet Spray, Ideal for Multiple Rooms"
        price={889.99}
        rating={3}
        image="https://m.media-amazon.com/images/I/81RTdXUl9fL._AC_SL1500_.jpg"
        />
        <Product
        id="49538094"
        title="
        Introducing Ring Spotlight Cam Plus, Battery | Two-Way Talk, Color Night Vision, and Security Siren (2022 release) - White"
        price={199.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/51qaMyQ22pL._SL1000_.jpg"
        />
        <Product
        id="49538096"
        title="Zevro /GAT101C Indispensable Dry Food Dispenser, Single Control, White/Chrome"
        price={21.00}
        rating={4}
        image="https://m.media-amazon.com/images/I/71yYJXeNulL._AC_SL1500_.jpg"
        />
    </div>
    <div className="home__row">
        <Product
        id="4903850"
        title="Brown Sugar Baby Board Book - Beautiful Story for Mothers and Newborns, Ages 0-3"
        price={2.00}
        rating={5}
        image="https://m.media-amazon.com/images/I/51PPvXaHTIL._SY498_BO1,204,203,200_.jpg"
        />

        <Product
        id="99903850"
        title="ANRABESS Women's Two Piece Outfits Sweater Sets Long Sleeve Pullover and Drawstring Pants Lounge Sets"
        price={49.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/61ki05m1QtL._AC_UL480_FMwebp_QL65_.jpg"

        />
        <Product
        id="3254354345"
        title="Lamicall Adjustable Laptop Stand, Portable Laptop Riser, Ergonomic Computer Notebook Stand Holder for MacBook Air Pro, Dell XPS, HP (10-17.3'') - Silver"
        price={29.51}
        rating={5}
        image="https://m.media-amazon.com/images/I/71pNZrEkYWL._AC_SL1500_.jpg"
        />
    </div>
    <div className="home__row">
        <Product
        id="90829332"
        title="SAMSUNG 49 inch Gaming Monitor, Ultrawide Curved Monitor, 240hz 1ms, Quantum Mini LED, G-Sync, Monitor Adjustable Height, HDR 2000, Odyssey Neo G9, G95NA (LS49AG952NNXZA)"
        price={1699.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/81FYF-2w5eL._AC_UY327_FMwebp_QL65_.jpg"
        />
    </div>
    <div className="home__row">
        <Product
        id="903850"
        title="Sunny Health & Fitness Walking Treadmill with Low Wide Deck and Multi-Grip Handrails for Balance, 295 LB Max Weight - SF-T7857, Gray"
        price={571.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/71+3UuedLzL._AC_SL1500_.jpg"
        />
        <Product
        id="8903851"
        title="Clé de Peau Beauté Lipstick"
        price={65.00}
        rating={4}
        image="https://m.media-amazon.com/images/I/6178k+nqMyL._AC_UL750_FMwebp_QL65_.jpg"
        />
        <Product
        id="23445930"
        title="Home Office Desk Chair - Adjustable Rolling Chair, Home, Make Up,Small Space, Bed Room"
        price={74.73}
        rating={5}
        image="https://m.media-amazon.com/images/I/71FrCam1jLL._AC_SL1500_.jpg"
        />
    </div>
</div>
);
}

export default Home;

