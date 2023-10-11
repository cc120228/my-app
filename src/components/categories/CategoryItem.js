import './CategoryItem.css'
import { Link } from "react-router-dom"
function CategoryItem(props) {
    return (
        <div className="CategoryItem">
            <img src={props.categoryImage} alt='' className="category-photo" />
            <div className="catergory-info-wrapper">
                <div className="category-title-wrapper">
                    {props.title} Shoes
                </div>
                <div className="category-btn-wrapper">
                    <Link to={props.path} className="page-btn">
                        <button>SHOP NOW</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CategoryItem