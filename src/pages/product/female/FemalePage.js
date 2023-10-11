import './FemalePage.css'
import ProductCard from "../../../components/ProductCard/ProductCard"
import { CartContext } from '../../../context/CartContext'
import { useContext } from 'react'
function FemalePage() {
    const cartContext = useContext(CartContext)

    const femaleProducts = cartContext.femaleProducts

    return (
        <div className="FemalePage">
            <div className="recommended-product-wrapper">
                <div className="product-wrapper">
                    <div className="products">
                            {femaleProducts.map((product) => (
                            <ProductCard product={product} id={product.id} photo={product.img} name={product.title} amount={product.amount} ></ProductCard>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FemalePage

