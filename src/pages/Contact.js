import React, { Component, Fragment } from 'react';
import HeaderComp from '../components/HeaderComp';
import FooterComp from '../components/FooterComp';
import BlockTitleComp from '../components/BlockTitleComp';
import ContactMapComp from '../components/ContactMapComp';
import ContactInfoComp from '../components/ContactInfoComp';

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <HeaderComp/>
                <div className="contact-main-content">
                    <BlockTitleComp title = "Contact"/>
                    <ContactMapComp/>
                    <ContactInfoComp/>
                </div>
                <FooterComp dark="footer-dark"/>
            </Fragment>
        );
    }
}

export default Contact;