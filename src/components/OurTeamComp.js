import React, { Component } from 'react';

class OurTeamComp extends Component {
    render() {
        return (
            <section>
                <div className="our-team">
                    <div className="container">
                        <h2 className="block-title">Meet Our Team</h2>
                        <p className="block-describe">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.</p>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="person-block">
                                    <div className="person-block__img-social">
                                        <img className="person-block__img" src="images/team-01.jpg" alt="about our team"/>
                                        <div className="person-block__social">
                                            <a href="#/"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#/"><i className="fab fa-instagram"></i></a>
                                            <a href="#/"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#/"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                    <a href="#/" className="person-block__link">Mark Porter</a>
                                    <p className="person-block__position">General Manager</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="person-block">
                                    <div className="person-block__img-social">
                                        <img className="person-block__img" src="images/team-02.jpg" alt="about our team"/>
                                        <div className="person-block__social">
                                            <a href="#/"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#/"><i className="fab fa-instagram"></i></a>
                                            <a href="#/"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#/"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                    <a href="#/" className="person-block__link">Laura Brady</a>
                                    <p className="person-block__position">Design Lead</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="person-block">
                                    <div className="person-block__img-social">
                                        <img className="person-block__img" src="images/team-03.jpg" alt="about our team"/>
                                        <div className="person-block__social">
                                            <a href="#/"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#/"><i className="fab fa-instagram"></i></a>
                                            <a href="#/"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#/"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                    <a href="#/" className="person-block__link">Angela Kwang</a>
                                    <p className="person-block__position">Experience Designer</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="person-block">
                                    <div className="person-block__img-social">
                                        <img className="person-block__img" src="images/team-04.jpg" alt="about our team"/>
                                        <div className="person-block__social">
                                            <a href="#/"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#/"><i className="fab fa-instagram"></i></a>
                                            <a href="#/"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#/"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                    <a href="#/" className="person-block__link">Cherlyn Long</a>
                                    <p className="person-block__position">SEO Consultant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurTeamComp;