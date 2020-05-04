import React, { Component } from 'react';
import TriggerAnimation from '../scroll/TriggerAnimation';

class FeaturesComp extends Component {
    componentDidMount() {
        TriggerAnimation('.feature-item', 'trigger-bottom-in');
    }
    render() {
        return (
            <section>
                <div className="features">
                    <h2 className="block-title --color">Our Features</h2>
                    <p className="block-describe --color">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae
                    elit.
            <br /> class aptent taciti litora torquent per idunt auctor a ornare odio.</p>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="feature-item media p-3 -opacity-0">
                                    <span className="feature-item__icon"><i className="fas fa-random"></i></span>
                                    <div className="media-body">
                                        <h4 className="block-sub-title">Fully Responsive</h4>
                                        <p className="block-sub-describe">Nam nec tellus a odio tincidunt auctor a mauris vitae
                                elit. class aptent taciti litora torquent per idunt auctor a ornare odio.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 mt-xl-0">
                                <div className="feature-item media p-3 -opacity-0">
                                    <span className="feature-item__icon"><i className="fab fa-dropbox"></i></span>
                                    <div className="media-body">
                                        <h4 className="block-sub-title">Multiple Layouts</h4>
                                        <p className="block-sub-describe">Nam nec tellus a odio tincidunt auctor a mauris vitae
                                elit. class aptent taciti litora torquent per idunt auctor a ornare odio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-6 col-md-12">
                                <div className="feature-item media p-3 -opacity-0">
                                    <span className="feature-item__icon"><i className="fas fa-cube"></i></span>
                                    <div className="media-body">
                                        <h4 className="block-sub-title">Modular Components</h4>
                                        <p className="block-sub-describe">Nam nec tellus a odio tincidunt auctor a mauris vitae
                                elit. class aptent taciti litora torquent per idunt auctor a ornare odio.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 mt-xl-0">
                                <div className="feature-item media p-3 -opacity-0">
                                    <span className="feature-item__icon"><i className="fas fa-box-open"></i></span>
                                    <div className="media-body">
                                        <h4 className="block-sub-title">Suits Your Style</h4>
                                        <p className="block-sub-describe">Nam nec tellus a odio tincidunt auctor a mauris vitae
                                elit. class aptent taciti litora torquent per idunt auctor a ornare odio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturesComp;