import React, { Component } from 'react';

class AboutLaunghComp extends Component {
    render() {
        return (
            <section>
                <div className="about-laungh laungh">
                    <h2 className="block-title --custom-title">Stay right up to date</h2>
                    <p className="block-describe --custom-describe">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. <br/> Class aptent taciti litora torquent per idunt auctor a ornare odio.</p>
                    <div className="laungh__button">
                        <form>
                            <input className="input-subscribe" placeholder="email@example.com" type="text"/>
                            <button className="main-button -custom-button">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutLaunghComp;