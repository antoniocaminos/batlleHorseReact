import React from 'react'
import './styles.css'
import Cart from "../../assets/Cart.png"

export const CartWidget = () => {
  return (
    <button className='cart-button'>
        <img src={Cart} alt="cart icon" className='cart-icon' />
    </button>
  )
}
export default CartWidget