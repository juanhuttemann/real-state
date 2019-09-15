import React, {Component} from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

class Filter extends Component {
    constructor(){
        super()
        this.cities = this.cities.bind(this)
        this.homeTypes = this.homeTypes.bind(this)
        this.rooms = this.rooms.bind(this)
    }
    componentWillMount(){
        this.props.populateAction()
    }

    cities(){
        if (this.props.globalState.populateFormsData.cities !== undefined){

            var { cities } = this.props.globalState.populateFormsData
            return cities.map((item) =>{
                return(
                    <option key={item} value={item}>{item}</option>
                )
            })
        }
    }
            
    homeTypes(){
        if (this.props.globalState.populateFormsData.homeTypes !== undefined) {

            var { homeTypes } = this.props.globalState.populateFormsData
            return homeTypes.map((item) => {
                return (
                    <option key={item} value={item}>{item}</option>
                )
            })
        }
    }

    rooms(){
        if (this.props.globalState.populateFormsData.rooms !== undefined) {

            var { rooms } = this.props.globalState.populateFormsData
            return rooms.map((item) => {
                return (
                    <option key={item} value={item}>{item}+ BR</option>
                )
            })
        }
    }

    render() {
        return (
            <section id="filter">
                <div className="inside">
                    <h4>Filter</h4>
                    <form onChange={this.props.change}> 
                    <label htmlFor="city">Cities</label>   
                    <select name="city" className="filters city">
                        <option value="">All</option>
                        {this.cities()}
                    </select>
                    
                    <label htmlFor="homeType">Home Type</label>   
                    <select name="homeType"
                    className="filters homeType">
                        <option value="">All</option>
                            {this.homeTypes()}
                    </select>

                    <label htmlFor="rooms">Rooms</label>   
                    <select name="rooms" className="filters bedrooms">
                        <option value="">0+ BR</option>
                            {this.rooms()}
                    </select>
                    <div className="filters price">
                        <span className="title">Price</span>
                            <Nouislider
                                range={{ min: 0, max: 50000 }}
                                start = {
                                    [0, 50000]
                                }
                                onSlide={this.props.onSlide}
                                step={100}
                                connect 
                                className="filters price-range"
                            />
                            <input type="text"
                            name = "min_price"
                            className = "min-price"
                            value = {
                                this.props.globalState.min_price
                            }
                            />
                            <input type="text"
                            name = "max_price"
                            className ="max-price"
                            value = {
                                this.props.globalState.max_price
                            }
                            />
                    </div>
                    <div className="filters floor-space">
                        <span className="title">Floor Space</span>
                            <input type="text" name="min_floor_space" className="min-floor-space" defaultValue={this.props.globalState.min_floor_space}/>
                            <input type="text" name="max_floor_space" className="max-floor-space" defaultValue={this.props.globalState.max_floor_space}/>
                    </div>
                    <div className="filters extras">
                        <span className="title">Extras</span>
                        <label htmlFor="extras">
                            <span>Elevators</span>
                            <input value="elevator" type="checkbox" name="elevator"/>
                        </label>
                        <label htmlFor="extras">
                            <span>Swimming Pool</span>
                            <input value="swimming_pool" type="checkbox" name="swimming_pool" />
                        </label>
                        <label htmlFor="extras">
                            <span>Finished Basement</span>
                                <input value="finished_basement" type="checkbox" name="finished_basement" />
                        </label>
                        <label htmlFor="extras">
                            <span>Gym</span>
                            <input value="gym" type="checkbox" name="gym" />
                        </label>
                    </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Filter;