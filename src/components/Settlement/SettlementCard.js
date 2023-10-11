import './SettlementCard.css'
import { useState, useContext } from 'react'
import { CartContext } from "../../context/CartContext"
function SettlementCard(props) {

    const cartContext = useContext(CartContext)
    const productTotalPrice = props.product.price * props.product.amount

    // const handleMinus = () => {
    //     const updatedCartList = [...cartContext.cartList]
    //     const requiredIndex = cartContext.cartList.findIndex((cart) => props.product.id === cart.id)
    //     updatedCartList[requiredIndex].amount = updatedCartList[requiredIndex].amount -1
    //     updatedCartList = updatedCartList.filter((cart) => cart.amount = 0)
    //     cartContext.setCartList(updatedCartList)
    // }

    const handleAdd = () => {
        const updatedCartList = [...cartContext.cartList]
        const requiredIndex = cartContext.cartList.findIndex((cart) => props.product.id === cart.id)
        updatedCartList[requiredIndex].amount = updatedCartList[requiredIndex].amount + 1
        const filteredCartList = updatedCartList.filter((cart) => cart.amount !== 0)
        cartContext.setCartList(filteredCartList)
    }

    const handleMinus = () => {
        const updatedCartList = [...cartContext.cartList]
        const requiredIndex = cartContext.cartList.findIndex((cart) => props.product.id === cart.id)
        updatedCartList[requiredIndex].amount = updatedCartList[requiredIndex].amount - 1
        const filteredCartList = updatedCartList.filter((cart) => cart.amount !== 0)
        cartContext.setCartList(filteredCartList)
    }

    return (
        <div className="SettlementCard" >
            <div className="settlement-product-photo-wrapper">
                <img src={props.product.img} alt='' className="settlement-product-photo"></img>
            </div>
            <div className="settlement-product-title">{props.product.title}</div>
            <div className="settlement-product-price">{props.product.price}</div>
            <button onClick={handleMinus}>-</button>  
            <div className="settlement-product-amount">{props.product.amount}</div>
            <button onClick={handleAdd}>+</button> 
            <div className="settlement-product-total-amount">{productTotalPrice}</div>
            
    
        </div>
    )
}

export default SettlementCard