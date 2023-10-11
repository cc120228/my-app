import { createContext, useReducer, useContext, useState } from "react"
import Product1 from '../assets/images/product-photo/product1.webp'
import Product2 from '../assets/images/product-photo/product2.webp'
import Product3 from '../assets/images/product-photo/product3.webp'
import Product4 from '../assets/images/product-photo/product4.webp'
import Product5 from '../assets/images/product-photo/product5.webp'
import Product6 from '../assets/images/product-photo/product6.webp'
import Product7 from '../assets/images/product-photo/product7.webp'
import Product8 from '../assets/images/product-photo/product8.webp'
import Product9 from '../assets/images/product-photo/product9.webp'

export const CartContext = createContext()

export function CartContextProvider ({children}) {

    const [femaleProducts, setFemaleProducts] = useState(
        [
            {
                id: 1,
                img: Product1,
                brand: "Nike",
                title: "Nike Dunk Low",
                price: 1050,
                category: "Female",
                rating: 3
            },
            {
                id: 2,
                img: Product2,
                brand: "Puma",
                title: "Puma Mirage Sport SD DJ Snake sportschoenen",
                price: 800,
                category: "Female",
                rating: 5
            },
            {
                id: 3,
                img: Product3,
                brand: "Nike",
                title: "Nike Air Max Scorpion Flyknit",
                price: 2000,
                category: "Female",
                rating: 4
            },
            {
                id: 4,
                img: Product4,
                brand: "Nike",
                title: "Nike Air Max 95 Recraft",
                price: 1000,
                category: "Female",
                rating: 5
            },
            {
                id: 5,
                img: Product5,
                brand: "New Balance",
                title: "New Balance 550",
                price: 800,
                category: "Female",
                rating: 3
            },
            {
                id: 6,
                img: Product6,
                brand: "Puma",
                title: "Puma Mirage Sport SD DJ Snake sportschoenen",
                price: 800,
                category: "Female",
                rating: 4
            }
        ]
    )

    const [maleProducts, setMaleProducts] = useState(
        [
            {
                id: 7,
                img: Product7,
                brand: "Reebok",
                title: "Reebok Club C 85",
                price: 400,
                category: "Male"
            },
            {
                id: 8,
                img: Product8,
                brand: "Reebok",
                title: "Reebok Classic Nylon Schoenen",
                price: 499,
                category: "Male",
            },
            {
                id: 9,
                img: Product9,
                brand:"Jordan",
                title: "Jordan 6 Retro Aqua",
                price: 1300,
                category: "Male"
            }
        ]
    )

    const [cartList, setCartList] = useState([])

    const [productDetailPageInfo, setProductDetailPageInfo] = useState({})

    const [confirmedProductList, setConfirmedProductList] = useState({})

    const [cartMap, setCartMap] = useState(new Map())

    return (
    <CartContext.Provider value={{
        femaleProducts,
        setFemaleProducts,
        maleProducts,
        setMaleProducts,
        cartList,
        setCartList,
        productDetailPageInfo,
        setProductDetailPageInfo,
        confirmedProductList,
        setConfirmedProductList
    }}>
        {children}
    </CartContext.Provider>
  )
}


// Step1: Create context
// Step2: Export ContextProvider and Context
// Step3: wrap ContextProvider in your desire components
// Step4: useContext to access the context