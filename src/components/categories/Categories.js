import CategoryItem from "./CategoryItem"
import { categories } from "../../assets/data/data"
import './Categories.css'

function Categories() {
    return (
        <div className="Categories">
            <div className="category-wrapper">
                {categories.map((category) => (
                    <CategoryItem categoryImage={category.img} title={category.title} path={category.path}></CategoryItem>
                ))}
            </div>
        </div>
    )
}

export default Categories