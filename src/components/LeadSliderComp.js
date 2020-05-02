import React, { Component } from 'react';

class LeadSliderComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: true
        }
    }
    render() {
        return (
            <section>
                <div className="lead-slider">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 order-last order-lg-first">
                                <article className="left-block">
                                    <h1 className="left-block__title mb-3">Great features with the Sotas</h1>
                                    <p className="left-block__describe mb-4">
                                        Lorem ipsum Sunt cupidatat reprehenderit ornare reprehenderit incididunt consequat aute et
                                        ornare proident.
                                    </p>
                                    <button className="main-button mr-3">View Demos</button>
                                    <button className="main-outline-button">Purchase</button>
                                </article>
                            </div>
                            <div className="col-lg-6 col-md-12 order-first order-lg-last">
                                <article className="right-block">
                                    <div className="slider">
                                        <div className={this.state.first ? "show" : "hide"}>
                                            <img className="slider__img" src="images/single-jpg-08.jpg" alt="First slide" />
                                        </div>
                                        <div className={this.state.first ? "hide" : "show"}>
                                            <img className="slider__img" src="images/single-jpg-05.jpg" alt="First slide" />
                                        </div>
                                        <span onClick={this.onChangeImage} className="slider__prev --icon"><i className="fas fa-chevron-left"></i></span>
                                        <span onClick={this.onChangeImage} className="slider__next --icon"><i className="fas fa-chevron-right"></i></span>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
    onChangeImage = () => {
        this.setState({
            first : !this.state.first
        })
    }
}

export default LeadSliderComp;