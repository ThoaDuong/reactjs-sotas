import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class HeaderComp extends Component {
    componentDidMount() {
        //Get header element
        var headerElement = document.getElementById('header');
        //Add background color when scroll down
        window.addEventListener('scroll', () => {
            var scrollY = window.scrollY;
            var headerHeight = headerElement.scrollHeight;
            if(scrollY > headerHeight){
                headerElement.classList.add('header-scroll');
            }
            else{
                headerElement.classList.remove('header-scroll');
            }
        })
        //Hide menu on scroll
        var prevScroll = window.scrollY;
        window.onscroll = function() {
            var currentScrollPos = window.scrollY;
              if (prevScroll > currentScrollPos) {
                headerElement.style.top = "0";
              } else {
                headerElement.style.top = "-100px";
              }
              prevScroll = currentScrollPos;
            }
    }
    render() {
        return (
            <header id="header" className={this.props.home ? this.props.home : ''}>
                <nav className="navbar navbar-expand-lg navbar-light nav-custom">
                    <div className="container">
                        <Link className="navbar-brand" exact="true" to="/">
                            <img src={this.props.home ? 'images/icons/logo-01.png' : 'images/icons/logo-02.png'} alt="Brand"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="navbar-nav ml-auto menu">
                                <li className="nav-item">
                                    <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/studies" activeClassName="active" className="nav-link">Page</NavLink>
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