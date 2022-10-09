import React from 'react'
import { MinusIcon, PlusIcon } from '../HeroIcons';
import { removeItem, increase, decrease } from "../features/cart/CartSlice";
import { useDispatch } from 'react-redux';

function CartItem({id, title, price, img, amount}) {
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
        <img src={img} alt="" />
        <div>
          <h4>{title}</h4>
          <h4 className='item-price'>{price} €</h4>
          <button 
            className='remove-btn'
            onClick={()=>dispatch(removeItem(id))}
          >
            Delete
          </button>
        </div>
        <div>
          <button 
            className='amount-btn'
            onClick={()=> dispatch(increase(id))}
          >
            <PlusIcon />
          </button>
          <p className='amount'>{amount}</p>
          <button 
            className='amount-btn'
            onClick={()=> {
              if (amount === 0) {
                dispatch(removeItem(id));
                return;
              }
                dispatch(decrease(id));
            }}
          >
            <MinusIcon />
          </button>
        </div>
    </article>
  )
}

export default CartItem