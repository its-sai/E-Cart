import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import SubTotal from './SubTotal.js'

function Checkout() {
  const [{basket},dispatch]=useStateValue();
  return (
    <div className='checkout'>
    <div className='checkout_left'>
        <img className='checkout_ad' src='https://i.pinimg.com/originals/01/68/4b/01684b75641aa17bd23461451d9c199d.png'></img>

    
    <div className='checkout_title'>
        <h1>Your Shopping Basket</h1>

        <hr className='horizontal_line'/>
         
         {basket.map(item=>(
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
    <div className='checkout_right'>
     <SubTotal/>
    </div>
    </div>
  )
}

export default Checkout