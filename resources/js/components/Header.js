import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
	<header id="site-header" className="site-header">
	    <div className="header-main-wapper">
	        <div className="header-main">
	            <div className="martfury-container">
	                <div className="row header-row">
	                    <div className="header-logo col-md-3 col-sm-3">
	                        <div className="d-logo">
	                            <div className="logo">
	                                <Link to="">
	                                    <img className="site-logo" alt="Logo" src=""/>
	                                </Link>
	                            </div>
	                            <h1 className="site-title"><Link to="" rel="home">Online Shopping for Clothing, Shoes, Accessories, Electronics, Apparel, Computers, Books, DVDs & more</Link></h1>
	                        </div>
	                        <div className="d-department">
	                            <div className="products-cats-menu close">
	                                <h2 className="cats-menu-title"><i className="icon-menu"><span className="s-space">&nbsp;</span></i><span className="text">Shop By Department</span></h2>

	                                <div className="toggle-product-cats nav">
	                                    <ul id="menu-shop-by-department-1" className="menu">
	                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2346">
	                                            <Link to="" className=" has-icon">
	                                            </Link>
	                                        </li>
	                                    </ul>
	                                </div>
	                            </div>                            
	                        </div>
	                        
	                    </div>
	                    
	                </div>
	            </div>
	        </div>
	    </div>
	</header>
)

export default Header