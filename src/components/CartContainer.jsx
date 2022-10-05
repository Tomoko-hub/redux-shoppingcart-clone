import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';

const CartContainer = () => {
    const { amount, cartItems, total } = useSelector((state)=> state.cart);
    if ( amount < 1 ) {
        return (
            <section>
                <header className='cart'>
                    <h2>Shopping Cart</h2>
                    <h4 className='empty-cart'>Your bag is empty.</h4>
                </header>
            </section>
        );
    }

    return (
        <section className='cart'>
            <header>
                <h2>Your shipping bag.</h2>
            </header>
            <div>
                {cartItems.map((item)=> {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        Total <span>{total} €</span>
                    </h4>
                </div>
                <button className='btn clear-btn'>Delete All</button>
            </footer>
        </section>
    )
};

export default CartContainer
