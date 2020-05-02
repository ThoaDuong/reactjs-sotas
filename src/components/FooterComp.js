import React, { Component } from 'react';

class FooterComp extends Component {
    render() {
        return (
            <footer>
                <div className={`footer ${this.props.dark ? this.props.dark : ''}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 footer__text">
                                <h4 className="footer__title">About Sotas</h4>
                                <p>5010 Stokes Isle Apt. 179, Venaville, New York 12390, United State</p>
                                <div>Phone: <a href="#/">(+1) 12 345 6789</a></div>
                                <div>Email: <a href="#/">info@yourdomain.com</a></div>
                                <div className="row icon-block">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-instagram"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-youtube"></i>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 footer__text">
                                <h4 className="footer__title">Our Links</h4>
                                <ul>
                                    <li><a href="#/">Company</a></li>
                                    <li><a href="#/">Product</a></li>
                                    <li><a href="#/">Careers</a></li>
                                    <li><a href="#/">Case Studies</a></li>
                                    <li><a href="#/">Pricing</a></li>
                                </ul>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 footer__text">
                                <h4 className="footer__title">Our Links</h4>
                                <ul>
                                    <li><a href="#/">Track Order</a></li>
                                    <li><a href="#/">Clients</a></li>
                                    <li><a href="#/">Contact</a></li>
                                    <li><a href="#/">Press</a></li>
                                    <li><a href="#/">FAQs</a></li>
                                </ul>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                <h4 className="footer__title">Newsletter</h4>
                                <div className="form-block">
                                    <p>Get a weekly digest of great articles</p>
                                    <form>
                                        <input className="enter-input" placeholder="email@example.com" type="text"/>
                                        <input className="submit-input" type="submit" value="Submit"/>
                                    </form>
                                    <p className="custom-form-p">We'll never share your email address</p>
                                </div>
                            </div>
                        </div>
                        <div className="row -custom-copyright">
                            <div className="col-md-6 col-sm-12 text-md-left text-sm-center">
                                <p>Copyright © 2020 All rights reserved</p>
                            </div>
                            <div className="col-md-6 col-sm-12 text-md-right text-sm-center">
                                <p>Sotas Template by <b>HunThemes</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterComp;