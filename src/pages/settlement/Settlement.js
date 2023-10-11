import SettlementCard from '../../components/Settlement/SettlementCard'
import { useState, useContext } from 'react'
import { CartContext } from "../../context/CartContext"
function Settlement() {

    // const cartContext = useContext(CartContext)
    // const femaleProducts = cartContext.femaleProducts
    // const maleProducts = cartContext.maleProducts

    // const productAmount = cartContext.cartList

    const cartContext = useContext(CartContext)
    const femaleProducts = cartContext.femaleProducts
    const maleProducts = cartContext.maleProducts
    const productAmount = cartContext.cartList

    const femaleShoppingList = femaleProducts.filter((shoppingItem) => {
        return productAmount.find((product) => {
            if (shoppingItem.id === product.id) {
                return true
            }
            return false
        });
    })

    const maleShoppingList = maleProducts.filter((shoppingItem) => {
        return productAmount.find((product) => {
            if (shoppingItem.id === product.id) {
                return true
            }
            return false
        });
    })

    const confirmedShoppingList = []
    femaleShoppingList.forEach((shoppingItem) => {
        const match = productAmount.find((product) => product.id === shoppingItem.id)
        if (match) {
            confirmedShoppingList.push({...shoppingItem, ...match})
        }
    });
    maleShoppingList.forEach((shoppingItem) => {
        const match = productAmount.find((product) => product.id === shoppingItem.id)
        if (match) {
            confirmedShoppingList.push({...shoppingItem, ...match})
        }
    });
    
    return (
        <div className="Settlement">
            {confirmedShoppingList.map((cart) => (
                <SettlementCard product={cart} />
            ))}
        </div>
    )
}

export default Settlement