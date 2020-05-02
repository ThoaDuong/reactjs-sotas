import React, { Component, Fragment } from 'react';
import HeaderComp from '../components/HeaderComp';
import FooterComp from '../components/FooterComp';
import StudiesItemComp from '../components/StudiesItemComp';
import BlockTitleComp from '../components/BlockTitleComp'

class PageStudies extends Component {
    render() {
        return (
            <Fragment>
                <HeaderComp/>
                <div className="studies-main-content">
                    <BlockTitleComp title = "Case Studies"/>
                    <StudiesItemComp/>
                </div>
                <FooterComp dark="footer-dark"/>
            </Fragment>
        );
    }
}

export default PageStudies;