import React, {
    Component
} from 'react';

class Filter extends Component {
    render() {
        return (
            <section id="filter">
                <div className="inside">
                    <h4>Filter</h4>
                    <form onChange={this.props.change}> 
                    <select name="neighborhood" className="filters neighborhood">
                        <option value="Ridgewood">Ridgewood</option>
                        <option value="Miami">Miami</option>
                    </select>
                    <select name="housetype" className="filters housetype">
                        <option value="Ranch">Ranch</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Room">Room</option>
                        <option value="House">House</option>
                    </select>
                    <select name="bedrooms" className="filters bedrooms">
                        <option value="1">1 BR</option>
                        <option value="2">2 BR</option>
                        <option value="3">3 BR</option>
                        <option value="4">4 BR</option>
                    </select>
                    <div className="filters price">
                        <span className="title">Price</span>
                        <input type="text" name="min_price" className="min-price"/>
                        <input type="text" name="min_price" className="max-price"/>
                    </div>
                    <div className="filters floor-space">
                        <span className="title">Floor Space</span>
                        <input type="text" name="min_floor_space" className="min-floor-space" />
                        <input type="text" name="min_floor_space" className="max-floor-space" />
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