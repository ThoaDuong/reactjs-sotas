import React, { Component } from 'react';

class DetailInfoComp extends Component {
    render() {
        return (
            <section>
                <div className="detail-info">
                    <div className="detail-info__form">
                        <div className="input-group mb-3 -custom-group">
                            <input type="text" className="form-control" placeholder="Search"/>
                            <div className="input-group-append">
                                <button className="btn-search" type="submit"><i className="fas fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="detail-info__category">
                        <h4 className="block-sub-title mt-5">Categories</h4>
                        <ul>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <a href="#/">Technology</a>
                                    <span>(15)</span>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <a href="#/">Finance</a>
                                    <span>(09)</span>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <a href="#/">Culture</a>
                                    <span>(28)</span>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <a href="#/">Development</a>
                                    <span>(13)</span>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <a href="#/">Design</a>
                                    <span>(14)</span>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <a href="#/">Sport Games</a>
                                    <span>(30)</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="detail-info__recent">
                        <h4 className="block-sub-title">Recent Posts</h4>
                        <div className="recent-item">
                            <a href="#/">
                                <img className="recent-item__img" src="images/post-05.jpg" alt="recent item"/>
                            </a> 
                            <div>
                                <a href="#/">
                                    <h6 className="recent-item__title">How business email can help your company</h6>
                                </a>
                                <p className="recent-item__date">June 28 2020</p>
                            </div>
                        </div>
                        <div className="recent-item">
                            <a href="#/">
                                <img className="recent-item__img" src="images/card-04.jpg" alt="recent item"/>
                            </a> 
                            <div>
                                <a href="#/">
                                    <h6 className="recent-item__title">How business email can help your company</h6>
                                </a>
                                <p className="recent-item__date">June 28 2020</p>
                            </div>
                        </div>
                        <div className="recent-item">
                            <a href="#/">
                                <img className="recent-item__img" src="images/card-06.jpg" alt="recent item"/>
                            </a> 
                            <div>
                                <a href="#/">
                                    <h6 className="recent-item__title">How business email can help your company</h6>
                                </a>
                                <p className="recent-item__date">June 28 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DetailInfoComp;
