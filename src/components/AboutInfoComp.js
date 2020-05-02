import React, { Component } from 'react';

class AboutInfoComp extends Component {
    render() {
        return (
            <section>
                <div className="about-info">
                    <img src="images/bg-01.jpg" alt="background" className="img-background"/>
                    <div className="about-info__img">
                        <img className="img-item" src="images/tes-01.jpg" alt="Icon person review"/>
                        <img className="img-item active" src="images/tes-02.jpg" alt="Icon person review"/>
                        <img className="img-item" src="images/tes-03.jpg" alt="Icon person review"/>
                    </div>
                    <div className="about-info__content">
                        <p>
                            “Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam”	
                        </p>
                        <img src="images/icons/brand-01-w.png" alt="Icon company review"/>
                        <div className="mt-3"><b>Joan Hansen</b> - Designer</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutInfoComp;