import React, { Component } from 'react';

class AboutUsComp extends Component {
    componentDidMount(){
        const counters = document.querySelectorAll(".number-block__number");
        const speed = 10;
        counters.forEach(counter =>{
            const updateCount = () => {
                const target = Number(counter.getAttribute('data-target'));
                const count = Number(counter.innerText);
                
                const inc = Math.floor(target / speed);
                if(count < target){
                    counter.innerText = count + inc;
                    setTimeout(updateCount, 1); 
                }else{
                    counter.innerText = target;
                }
            }
            updateCount();
        })
    }
    render() {
        return (
            <section>
                <div className="about-us">
                    <div className="container">
                        <div className="about-us__block-one">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <img className="img" src="images/single-jpg-10.jpg" alt="Describe about us"/>
                                </div>
                                <div className="col-lg-6 col-md-12 mt-md-5 my-lg-auto">
                                    <h2 className="block-sub-title">We’re an aspiring team of coders and creatives</h2>
                                    <p className="block-sub-describe">Accumsan at ipsum velit. Nam nec tellus a odio tincidunt auctor. Class aptent taciti litora torquent per idunt auctor totam rem ornare odio.</p>
                                    <div className="feature-block">
                                        <div className="row">
                                            <div className="col-xl-5 col-lg-12 col-md-5">
                                                <span><i className="far fa-check-circle"></i>  Fully Responsive</span>
                                            </div>
                                            <div className="col-xl-5 col-lg-12 col-md-5">
                                                <span><i className="far fa-check-circle"></i>  Multiple Layouts</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-5 col-lg-12 col-md-5">
                                                <span><i className="far fa-check-circle"></i>  Modular Components</span>
                                            </div>
                                            <div className="col-xl-5 col-lg-12 col-md-5">
                                                <span><i className="far fa-check-circle"></i>  Suits Your Style</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="about-us__block-two">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 order-lg-first order-last mt-md-5 my-lg-auto">
                                        <h2 className="block-sub-title">We forge partnerships and build great products</h2>
                                        <p className="block-sub-describe">Accumsan at ipsum velit. Nam nec tellus a odio tincidunt auctor. Class aptent taciti litora torquent per idunt auctor totam rem ornare odio.</p>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="number-block">
                                                    <span className="number-block__number" data-target="98">0</span>
                                                    <span>%</span>
                                                    <div className="number-block__text">User Satisfaction</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 mt-lg-0 mt-xl-6 mt-3">
                                                <div className="number-block">
                                                    <span className="number-block__number" data-target="24">0</span>
                                                    <span>/7</span>
                                                    <div className="number-block__text">Support</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 mx-auto mt-3">
                                                <div className="number-block">
                                                    <span className="number-block__number" data-target="159">0</span>
                                                    <span>k+</span>
                                                    <div className="number-block__text">Downloads</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 order-lg-last order-first">
                                        <img className="img" src="images/single-jpg-11.jpg" alt="Describe about us"/>
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

export default AboutUsComp;