import React from 'react'
import './SubTotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function SubTotal() {
  const [{basket},dispatch]=useStateValue();
  return (
    <div className='subtotal'>SubTotal
    <CurrencyFormat
      renderText={(value)=>(
        <>
        <p>
            SubTotal({basket.length} items): <strong>{value}</strong>

        </p>
        <small className='subtotal_gift'>
            <input type="checkbox"/> This Order contains gift
        </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeperator={"true"}
      prefix={"$"}
    />

    <button>Proceed to checkout</button>

    
    </div>
  )
}

export default SubTotal