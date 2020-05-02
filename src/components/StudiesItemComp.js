import React, { Component } from 'react';
import PersonBlockComp from './PersonBlockComp';

class StudiesItemComp extends Component {
    render() {
        return (
            <section>
                <div class="studies-item">
                    <div class="container">
                        <div class="studies-item__list">
                            <ul>
                                <li><a href="#/">All</a></li>
                                <li className="active"><a href="#/">Marketing</a></li>
                                <li><a href="#/">Mobile</a></li>
                                <li><a href="#/">Web</a></li>
                                <li><a href="#/">Software</a></li>
                            </ul>
                        </div>
                        <div class="studies-item__block">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                                    <PersonBlockComp img = "images/card-01.jpg"/>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                                    <PersonBlockComp img = "images/card-02.jpg"/>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                                    <PersonBlockComp img = "images/card-03.jpg"/>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                                    <PersonBlockComp img = "images/card-01.jpg"/>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                                    <PersonBlockComp img = "images/card-02.jpg"/>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                                    <PersonBlockComp img = "images/card-03.jpg"/>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                                    <PersonBlockComp img = "images/card-01.jpg"/>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                                    <PersonBlockComp img = "images/card-02.jpg"/>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                                    <PersonBlockComp img = "images/card-03.jpg"/>
                                </div>
                            </div>
                        </div>
                        <div class="studies-item__learnmore mt-4 text-center">
                            <button class="main-button">Read more</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default StudiesItemComp;