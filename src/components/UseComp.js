import React, { Component } from 'react';
import PersonBlockComp from './PersonBlockComp';

class UseComp extends Component {
    render() {
        return (
            <section>
                <div className="use">
                    <h2 className="block-title">Sotas In Use</h2>
                    <p className="block-describe">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. <br/> Classes aptent taciti litora torquent per idunt auctor a ornare odio.</p>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <PersonBlockComp img = "images/card-01.jpg"/>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <PersonBlockComp img = "images/card-02.jpg"/>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <PersonBlockComp img = "images/card-03.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default UseComp;