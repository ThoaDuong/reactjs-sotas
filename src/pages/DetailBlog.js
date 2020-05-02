import React, { Component, Fragment } from 'react';
import HeaderComp from '../components/HeaderComp';
import FooterComp from '../components/FooterComp';
import DetailPostComp from '../components/DetailPostComp';
import DetailInfoComp from '../components/DetailInfoComp';
import BlockTitleComp from '../components/BlockTitleComp';

class DetailBlog extends Component {
    render() {
        return (
            <Fragment>
                <HeaderComp/>
                <div className="detail-blog-main-content">
                    <BlockTitleComp title="Blog List"/>
                    <div className="custom-margin">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9">
                                    <DetailPostComp/>
                                </div>
                                <div className="col-lg-3">
                                    <DetailInfoComp/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterComp dark="footer-dark"/>
            </Fragment>
        );
    }
}

export default DetailBlog;