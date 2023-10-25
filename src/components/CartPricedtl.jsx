import React from 'react'

function CartPricedtl({products}) {

    let totalPrice = products.reduce((a,b) => a+b.price, 0);

    const items = products.length;
    const discount = 0;
    const discPrice = totalPrice - discount;

  return (
    <div id='cart_total_detail'>
                 <div>
                     <p>Price ({items} item)</p>
                     <p>{totalPrice} $</p>
                 </div>
    
                 <div>
                     <p>Discount</p>
                     <p>{discount}</p>
                 </div>
            
                 <div>
                     <p>Delivery Charges</p>
                     <p>Free</p>
                 </div>

                 <div id="cart_total">
                    <p>Total Amount</p>
                    <p>{discPrice} $</p>
                 </div>
            </div>
  )
}

export default CartPricedtl