import Advertisement from "../../components/Advertisement/Advertisement"
import Categories from "../../components/categories/Categories"

function MainPage() {
    return (
        <div className="MainPage">
            <div className="advertisement-wrapper">
                <Advertisement></Advertisement>
            </div>
            <div className="categories-wrapper">
                <Categories></Categories>
            </div>
        </div>
    )
}

export default MainPage