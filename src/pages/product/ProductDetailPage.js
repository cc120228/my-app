import { useParams } from "react-router"
import { Link, useLocation } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"
import { useContext, useState } from 'react'
import './ProductDetailPage.css'

function ProductDetailPage() {
    const cartContext = useContext(CartContext)
    const product = cartContext.productDetailPageInfo
    const femaleProducts = cartContext.femaleProducts

    const data = product

    const [amount, setAmount] = useState(1)
    //1. when the user click the button run handleAddToCart
    //2. loop cartContext.cartList to find the matching id products
    //3. use method to loop through the entire array to update the amount of that specific product
    //4. update the cartContext.cartList with a new updated array

    // const handleAddToCart = () => {
    //     const requiredIndex = cartContext.cartList.findIndex((cart) => data.id === cart.id)
    //     const updatedCartList = [...cartContext.cartList]
    //     updatedCartList[requiredIndex].amount = updatedCartList[requiredIndex].amount + amount
    //     cartContext.setCartList(updatedCartList)
    // }
    
    const handleAddToCart = () => {
        const updatedCartList = [...cartContext.cartList]
        const requiredIndex = cartContext.cartList.findIndex((cart) => data.id === cart.id)
        if (requiredIndex === -1) {
            updatedCartList.push({id: data.id, amount: amount})
        } else {
            updatedCartList[requiredIndex].amount = updatedCartList[requiredIndex].amount + amount
        }
        cartContext.setCartList(updatedCartList)
    } 



    const handleMinus = () => {
        setAmount(amount - 1)
    }

    const handleAdd = () => {
        setAmount(amount + 1)
    }

    // const location = useLocation()
    // const { id } = location.state
    // const data = femaleProducts[id]
    return (
        <div className="ProductDetailPage">
            <div className="photo-left-part">
                <div className="product-photo-upper-wrapper">
                    <img src={data.img} alt="" className="product-photo-big"></img>
                </div>
            </div>

            <div className='photo-right-part'>
                <div className="product-info-wrapper">
                    <div className="path">
                        <Link to={"/" + data.category} className="back-btn">
                            {data.category}
                        </Link>
                        <div> -- </div>
                        <div>{data.title}</div>
                    </div>
                   
                    <div className="brand-name">{data.brand}</div>
                    <div className="product-name">{data.title}</div>
                    <div className="price">${data.price}</div>
                    <button onClick={handleMinus}>-</button>
                    <div className="amount">{amount}</div>
                    <button onClick={handleAdd}>+</button>
                    <div className="add-to-cart-btn">
                        <button onClick={handleAddToCart}>
                            Add to Shopping Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage