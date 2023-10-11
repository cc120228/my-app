import './HeaderBar.css'
import CompanyLogo from '../../assets/brand/company-logo.png'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom"

function HeaderBar() {
    return (
        <div className="HeaderBar" sticky="top">
            <div className="icon-part">
                <Link to="/" className="company-icon-wrapper">
                    <img src={ CompanyLogo } alt='' className="company-icon" />
                </Link>
            </div>

            <div className="left-part">
                <div className="page-btn-wrapper">
                    <Link to="/About" className="page-btn">About</Link>
                </div>
            </div>

            <div className="right-part">
                <div className="search-bar-wrapper">
                    <input className="search-bar"></input>
                </div>

                <div className="settlement-wrapper">
                    <Link to="/Settlement" className="shopping-bag-wrapper">
                        <Badge badgeContent={0} color="primary">
                            <ShoppingBagIcon />
                        </Badge>
                    </Link>    
                    
                </div>
            </div>
        </div>
    )
}

export default HeaderBar