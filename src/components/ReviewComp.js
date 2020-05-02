import React, { Component } from 'react';

class ReviewComp extends Component {
    render() {
        return (
            <section>
                <div className="review">
                    <div className="container">
                        <h2 className="block-title">Customers Say</h2>
                        <p className="block-describe">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. <br/> Class aptent taciti litora torquent per idunt auctor a ornare odio.</p>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                {/* Block one */}
                                <div className="slick-block">
                                    <div className="custom-slick-slide">
                                        <p className="content">“Ut enim ad minima veniam, nisi ut aliquid ex ea como consequatur, quis nostrum exercitationem ullam corporis suscipit laboriosam? Quis autem vel eum iure”</p>
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <span>Christine Wells - Photography</span>
                                    </div>
                                    <img className="slick-img" src="images/tes-01.jpg" alt="Icon person review"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                {/* Block two */}
                                <div className="slick-block">
                                    <div className="custom-slick-slide">
                                        <p className="content">“Ut enim ad minima veniam, nisi ut aliquid ex ea como consequatur, quis nostrum exercitationem ullam corporis suscipit laboriosam? Quis autem vel eum iure”</p>
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <span>Christine Wells - Photography</span>
                                    </div>
                                    <img className="slick-img" src="images/tes-02.jpg" alt="Icon person review"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ReviewComp;