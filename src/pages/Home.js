import React, { Component, Fragment } from 'react';
import HeaderComp from '../components/HeaderComp';
import LeadSliderComp from '../components/LeadSliderComp';
import StartComp from '../components/StartComp';
import UseComp from '../components/UseComp';
import FeaturesComp from '../components/FeaturesComp';
import ReviewComp from '../components/ReviewComp';
import LaunghComp from '../components/LaunghComp';
import FooterComp from '../components/FooterComp';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <HeaderComp/>
                <div className="home-main-content">
                    <LeadSliderComp/>
                    <StartComp/>
                    <UseComp/>
                    <FeaturesComp/>
                    <ReviewComp/>
                    <LaunghComp/>
                </div>
                <FooterComp/>
            </Fragment>
        );
    }
}

export default Home;