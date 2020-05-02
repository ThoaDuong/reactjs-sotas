import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class HeaderComp extends Component {
    render() {
        return (
            <header className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-light nav-custom">
                    <div className="container">
                        <Link className="navbar-brand" to="/" exact>
                            <img src="images/icons/logo-01.png" alt="Brand"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="navbar-nav ml-auto menu">
                                <li className="nav-item">
                                    <NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to="/studies" activeClassName="active" className="nav-link">Page</NavLink>
                                    <div className="child-item">
                                        <ul>
                                            <li><a href="#/">Page 1</a></li>
                                            <li><a href="#/">Page 2</a></li>
                                            <li><a href="#/">Page 3</a></li>
                                            <li><a href="#/">Page 4</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/detail" activeClassName="active" className="nav-link">Blog</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" activeClassName="active" className="nav-link">Contact</NavLink>
                                </li>
                            </ul>
                            <button className="main-outline-button ml-5">Buy SotaS</button>
                            
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderComp;