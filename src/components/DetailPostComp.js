import React, { Component } from 'react';
import DetailItemComp from './DetailItemComp';

class DetailPostComp extends Component {
    render() {
        return (
            <section>
                <div className="detail-post">
                    <DetailItemComp img = "images/post-07.jpg"/>
                    <DetailItemComp img = "images/post-02.jpg"/>
                    <DetailItemComp img = "images/post-08.jpg"/>
                    <div className="panigation-block">
                        <ul>
                            <li><a href="#/"><i className="fas fa-chevron-left"></i></a></li>
                            <li className="active"><a href="#/">1</a></li>
                            <li><a href="#/">2</a></li>
                            <li><a href="#/">3</a></li>
                            <li><a href="#/"><i className="fas fa-chevron-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default DetailPostComp;