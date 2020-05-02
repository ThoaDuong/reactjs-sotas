import React, { Component } from 'react';

class ContactInfoComp extends Component {
    render() {
        return (
            <section>
                <div class="contact-info">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5 col-md-12">
                                <div class="get-in-touch">
                                    <h4 class="block-sub-title">Get in Touch</h4>
                                    <p class="block-sub-describe">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                    </p>
                                    <ul class="list-contact">
                                        <li>
                                            <i class="fas fa-phone"></i>
                                            <a class="list-item" href="#/">(+1) 12 345 6789</a>
                                        </li>
                                        <li>
                                            <i class="fas fa-envelope"></i>
                                            <a class="list-item" href="#/">info@yourdomain.com</a>
                                        </li>
                                        <li>
                                            <i class="fas fa-globe-asia"></i>
                                            <a class="list-item" href="#/">https://sotas.com/</a>
                                        </li>
                                        <li>
                                            <i class="fas fa-map-marker-alt"></i>
                                            <span class="list-item"> 5010 Stokes Isle Apt. 179, New York</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-12">
                                <div class="send-message">
                                    <form>
                                        <div class="row">
                                            <div class="col-md-6 col-sm-12 mt-3">
                                                <input type="text" class="form-control" placeholder="Name *"/>
                                            </div>
                                            <div class="col-md-6 col-sm-12 mt-3">
                                                <input type="text" class="form-control" placeholder="E-mail *"/>
                                            </div>
                                            <div class="col-md-6 col-sm-12 mt-3">
                                                <input type="text" class="form-control" placeholder="Company"/>
                                            </div>
                                            <div class="col-md-6 col-sm-12 mt-3">
                                                <input type="text" class="form-control" placeholder="Phone"/>
                                            </div>
                                            <div class="col-12 mt-3">
                                                <textarea class="form-control" rows="5" placeholder="Your message"></textarea>
                                              </div>
                                        </div>
                                        <button type="submit" class="main-button mt-3">Send Message</button>
                                      </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactInfoComp;