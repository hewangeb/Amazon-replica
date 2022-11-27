import React from "react";
import "./Checkout.css";
import { useStateValue } from "./Stateprovider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
const [{ basket, user }, dispatch] = useStateValue();

return (
<div className="checkout">
    <div className="checkout__left">
    <img
        className="checkout__ad"
        src="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/5/AmazonStores/ATVPDKIKX0DER/d29f0567a0d46fbb683d8cd17bd4caa5.w3000.h600._CR0%2C0%2C3000%2C600_SX1280_.png"
        alt=""
        // src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        // alt=""
    />
    <div>
        <h3>Hello {user?.email}</h3>
        <h2 className="checkout__title">Your shopping Basket</h2>
        {basket.map((item) => (
        <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
        />
        ))}
    </div>
    </div>
    <div className="checkout__right">
    <Subtotal />
    </div>
</div>
);
}

export default Checkout;