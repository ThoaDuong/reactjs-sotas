import React, { Component } from 'react';

class DetailItemComp extends Component {
    render() {
        return (
            <article>
                <div className="detail-item">
                    <div className="detail-item__img-date">
                        <img className="detail-item__img" src={this.props.img} alt="item detail item"/>
                        <div className="detail-item__date">25 Jun 2020</div>
                    </div>
                    <div className="detail-item__text">
                        <a href="#/" className="detail-item__title">
                            <h4 className="block-sub-title">How business email can help your company</h4>
                        </a>
                        <p className="block-sub-describe">
                            Accumsan at ipsum velit. Nam nec tellus tincidunt auctor. Class aptent taciti litora torquent per idunt. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                        </p>
                        <a className="detail-item__readmore" href="#/">Read more</a>
                        <div className="detail-item__compose">
                            <i className="far fa-user pr-2"></i>
                            <a href="#/">Diana Henry</a>
                            <i className="far fa-folder pl-4 pr-2"></i>
                            <a href="#/">Design, </a>
                            <a href="#/">Software</a>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default DetailItemComp;