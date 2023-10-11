import './ProductCard.css'
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"
import { useContext } from 'react'
// props are immutable
// which means unchangeagble


// Parent Component : add a method to change props -> method_1
// ->>(props) Child Component
// Change props

function ProductCard(props) {
    const cartContext = useContext(CartContext)
    const navigate = useNavigate()

    // const handleAddToCart = () => {
    //     const requiredIndex = cartContext.cartList.findIndex((cart) => props.id === cart.id)
    //     const updatedCartList = [...cartContext.cartList]
    //     updatedCartList[requiredIndex].amount =  updatedCartList[requiredIndex].amount +1
    //     cartContext.setCartList(updatedCartList)
    // }

    const handleAddToCart = () => {
        const updatedCartList = [...cartContext.cartList]
        const requiredIndex = cartContext.cartList.findIndex((cart) => props.id === cart.id)
        if (requiredIndex === -1) {
            updatedCartList.push({id: props.id, amount: 1})
        } else {
            updatedCartList[requiredIndex].amount = updatedCartList[requiredIndex].amount +1
        }
        cartContext.setCartList(updatedCartList)
    } 


    const handleImageClick = () => {
        // navigate('/ProductDetailPage', {
        //     state: {
        //         id: props.id
        //     }
        // })
        cartContext.setProductDetailPageInfo(props.product)
        navigate('/ProductDetailPage')
    }

    return (
        <div className="ProductCard">
                <div className="card">
                    <div className="sneaker">
                        <img onClick={handleImageClick} src={props.photo} alt='' className="product-photo"></img>
                    </div>
                    <div className="info">
                        <div className="product-name" onClick={handleImageClick}>{props.name}</div>
                        <div className="product-price"> $ {props.product.price} </div>
                    </div>
                    <div className="purchase">
                        <button onClick={handleAddToCart}>Add to cart</button>
                    </div>  
                </div>


        </div>
    )
}

export default ProductCard