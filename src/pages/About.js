import React, { Component, Fragment } from 'react';
import HeaderComp from '../components/HeaderComp';
import FooterComp from '../components/FooterComp';
import AboutUsComp from '../components/AboutUsComp';
import AboutInfoComp from '../components/AboutInfoComp';
import OurTeamComp from '../components/OurTeamComp';
import AboutLaunghComp from '../components/AboutLaunghComp';
import BlockTitleComp from '../components/BlockTitleComp';

class About extends Component {
    render() {
        return (
            <Fragment>
                <HeaderComp/>
                <div className="about-main-content">
                    <BlockTitleComp title = "About Us"/>
                    <AboutUsComp/>
                    <AboutInfoComp/>
                    <OurTeamComp/>
                    <AboutLaunghComp/>
                </div>
                <FooterComp/>
            </Fragment>
        );
    }
}

export default About;