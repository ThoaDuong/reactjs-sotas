import React, { Component } from 'react';
import TriggerAnimation from '../scroll/TriggerAnimation'

class StartComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            one: true,
            two: false
        }
    }
    componentDidMount() {
        TriggerAnimation('.step-block', 'trigger-right-in');
        TriggerAnimation('.collapse-custom', 'trigger-left-in');
    }
    render() {
        return (
            <section>
                <div className="start">
                    <h1 className="block-title">Start With Sotas</h1>
                    <p className="block-describe">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. <br /> Classes aptent taciti litora torquent per idunt auctor a ornare odio.</p>
                    <div className="container">
                        {/*Step start with sotas*/}
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="left-block">
                                    <img className="left-block__img" src="images/single-jpg-02.jpg" alt="Describe process" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="row custom-margin-res">
                                    <div className="step-block media p-3 -opacity-0">
                                        <span className="step-block__icon"><i className="fas fa-user"></i></span>
                                        <div className="media-body">
                                            <h4 className="block-sub-title">Create account</h4>
                                            <p className="block-sub-describe">Accumsan at ipsum velit. Nam nec tellus a odio tincun an auctor. Classes aptent taciti litora torquent per idunt auctor aoi.</p>
                                        </div>
                                    </div>
                                    <div className="step-block media p-3 -opacity-0">
                                        <span className="step-block__icon"><i className="fas fa-pen"></i></span>
                                        <div className="media-body">
                                            <h4 className="block-sub-title">Start creating</h4>
                                            <p className="block-sub-describe">Accumsan at ipsum velit. Nam nec tellus a odio tincun an auctor. Classes aptent taciti litora torquent per idunt auctor aoi.</p>
                                        </div>
                                    </div>
                                    <div className="step-block media p-3 -opacity-0">
                                        <span className="step-block__icon"><i className="fas fa-share-alt"></i></span>
                                        <div className="media-body">
                                            <h4 className="block-sub-title">Share and enjoy</h4>
                                            <p className="block-sub-describe">Accumsan at ipsum velit. Nam nec tellus a odio tincun an auctor. Classes aptent taciti litora torquent per idunt auctor aoi.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="custom-margin"></div>
                        {/*Save tons on design*/}
                        <div className="row">
                            <div className="col-lg-6 col-md-12 order-last order-lg-first">
                                <div className="custom-margin-res"></div>
                                <div className="save-block">
                                    <h2 className="block-sub-title">Save tons on design and development</h2>
                                    <p className="block-sub-describe">Accumsan at ipsum velit. Nam nec tellus a odio tincidunt auctor. Classes aptent taciti litora torquent per idunt auctor a ornare odio.</p>
                                    <div id="accordion">
                                        <div className="collapse-custom -opacity-0">
                                            <div className="">
                                                <a onClick={this.onShowOne}
                                                    className={this.state.one ? "card-custom card-link change-color" : "card-custom card-link"}
                                                    data-toggle="collapse" href="#collapseOne">
                                                    <h5>Fully Responsive</h5>
                                                    {this.state.one ? <i className="fas fa-minus-circle"></i> : <i className="fas fa-plus-circle"></i>}
                                                </a>
                                            </div>
                                            <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                                <div className="mt-2 collapse-text">
                                                    Accumsan at ipsum velit. Nam nec tellus a odio tincidunt auctor. Classes aptent taciti litora torquent per idunt auctor a ornare odio.
                                            </div>
                                            </div>
                                        </div>
                                        <div className="collapse-custom -opacity-0">
                                            <div className="">
                                                <a onClick={this.onShowTwo}
                                                    className={this.state.two ? "card-custom collapsed card-link change-color" : "card-custom collapsed card-link"}
                                                    data-toggle="collapse" href="#collapseTwo">
                                                    <h5>Multiple Layouts</h5>
                                                    {this.state.two ? <i className="fas fa-minus-circle"></i> : <i className="fas fa-plus-circle"></i>}
                                                </a>
                                            </div>
                                            <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                                <div className="mt-2 collapse-text">
                                                    Accumsan at ipsum velit. Nam nec tellus a odio tincidunt auctor. Classes aptent taciti litora torquent per idunt auctor a ornare odio.
                                          </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 order-first order-lg-last">
                                <div className="right-block">
                                    <img className="right-block__img" src="images/single-jpg-03.jpg" alt="Describe process" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    onShowOne = () => {
        if (this.state.two) {
            this.setState({
                two: false
            })
        }
        this.setState({
            one: !this.state.one
        })

    }
    onShowTwo = () => {
        if (this.state.one) {
            this.setState({
                one: false
            })
        }
        this.setState({
            two: !this.state.two
        })
    }
}

export default StartComp;