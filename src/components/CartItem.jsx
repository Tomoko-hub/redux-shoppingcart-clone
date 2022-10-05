import React from 'react'
import { MinusIcon, PlusIcon } from '../HeroIcons';

function CartItem({id, title, price, img, amount}) {
  return (
    <article className='cart-item'>
        <img src={img} alt="" />
        <div>
          <h4>{title}</h4>
          <h4 className='item-price'>{price}</h4>
          <button className='remove-btn'>Delete</button>
        </div>
        <div>
          <button className='amount-btn'></button>
            <PlusIcon />
          <p className='amount'>{amount}</p>
          <button className='amount-btn'></button>
            <MinusIcon />
        </div>
    </article>
  )
}

export default CartItem