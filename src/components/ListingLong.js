import React, { Component } from 'react';

export default class Listings extends Component {
    render() {
        return (
            <div className="col-xs-12
                col-sm-10
                col-md-12
                col-lg-12">
                <div className="listing">
                    <div className="listing-img" style={{
                        background: `url("${this.props.data.image}") no-repeat center center` }}>
                        <span className="address">{this.props.data.address}</span>
                        <div className="details">
                            <div className="row">
                                <div className="col-md-3 col-lg-6">
                                    <div className="user-img"></div>
                                </div>
                                <div className="col-md-9 col-lg-6">
                                    <div className="user-details">
                                        <span className="user-name">Nina Smith</span>
                                        <span className="post-date">05/05/2017</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="listing-details">
                                        <div className="floor-space">
                                            <i className="fa fa-square-o" aria-hidden="true" />
                                            <span> {this.props.data.floorSpace} ft&sup2;</span>
                                        </div>
                                        <div className="bedrooms">
                                            <i className="fa fa-bed" aria-hidden="true" />
                                            <span> {this.props.data.rooms} Bedrooms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="view-btn">
                                        View Listing
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bottom-info">
                                <span className="price">${this.props.data.price} / month </span>
                                <span className="location"><i className="fa fa-map-marker" aria-hidden="true" /> {this.props.data.city} {this.props.data.state}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}