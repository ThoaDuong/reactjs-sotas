import React, { Component } from 'react';

class LaunghComp extends Component {
    render() {
        return (
            <section>
                <div className="laungh">
                    <h2 className="block-title --custom-title">Start Your Launch</h2>
                    <p className="block-describe --custom-describe">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. <br/> Class aptent taciti litora torquent per idunt auctor a ornare odio.</p>
                    <div className="laungh__button">
                        <button className="main-button">Buy SotaS Now</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default LaunghComp;