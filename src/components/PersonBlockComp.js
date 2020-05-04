import React, { Component } from 'react';
import TriggerAnimation from '../scroll/TriggerAnimation'

class PersonBlockComp extends Component {
    componentDidMount() {
        TriggerAnimation('.person-block', 'trigger-bottom-in');
    }
    render() {
        return (
            <div className="person-block -opacity-0">
                <img className="person-block__img" src={this.props.img} alt="Person in use"/>
                <div className="person-content">
                    <h4 className="block-sub-title">New Company</h4>
                    <p className="block-sub-describe">Accumsan at ipsum velit. Nam nec tellus tincidunt auctor. Classes aptent taciti litora torquent per idunt.</p>
                    <a className="person-content__link" href="#/">Read more</a>
                </div>
            </div>
        );
    }
}

export default PersonBlockComp;