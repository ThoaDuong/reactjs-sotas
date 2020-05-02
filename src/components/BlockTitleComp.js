import React, { Component } from 'react';

class BlockTitleComp extends Component {
    render() {
        return (
            <section>
                <div className="about-title">
                    <div className="title-block">
                        <div className="container-fluid">
                            <h2 className="heading"> {this.props.title} </h2>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlockTitleComp;