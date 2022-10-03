import React from 'react';
import { useSelector } from 'react-redux';
import { CartIcon } from "../HeroIcons";

const NavBar = () => {
    const { amount } = useSelector((store)=> store.cart);

  return (
    <nav>
        <div className="nav-center">
            <h3>Shopping</h3>
            <div className="nav-container">
                <CartIcon />
                <div className="amount-container">
                    <p className="total-amount"> { amount }</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar;
