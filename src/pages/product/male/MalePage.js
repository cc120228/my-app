import './MalePage.css'
import ProductCard from "../../../components/ProductCard/ProductCard"
import { CartContext } from '../../../context/CartContext'
import { useContext } from 'react'
function MalePage() {
    const cartContext = useContext(CartContext)

    const maleProducts = cartContext.maleProducts

    return (
        <div className="MalePage">
            <div className="recommended-product-wrapper">
                <div className="product-wrapper">
                    <div className="products">
                            {maleProducts.map((product) => (
                            <ProductCard product={product} id={product.id} photo={product.img} name={product.title} amount={product.amount} ></ProductCard>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MalePage

