import React, {
    Component
} from 'react';

class Filter extends Component {
    render() {
        return (
            <section id="filter">
                <div className="inside">
                    <h4>Filter</h4>
                    <select name="neighborhood" className="filters neighborhood">
                        <option value="">Ridgewood</option>
                    </select>
                    <select name="housetype" className="filters housetype">
                        <option value="">Ranch</option>
                    </select>
                    <select name="bedrooms" className="filters bedrooms">
                        <option value="">2 BR</option>
                    </select>
                    <div className="filters price">
                        <span className="title">Price</span>
                        <input type="text" name="min-price" className="min-price"/>
                        <input type="text" name="min-price" className="max-price"/>
                    </div>
                    <div className="filters floor-space">
                        <span className="title">Floor Space</span>
                        <input type="text" name="min-floor-space" className="min-floor-space" />
                        <input type="text" name="min-floor-space" className="max-floor-space" />
                    </div>
                    <div className="filters extras">
                        <span className="title">Extras</span>
                        <label for="extras">
                            <span>Elevators</span>
                            <input value="elevator" type="checkbox" name="extras"/>
                        </label>
                        <label for="extras">
                            <span>Swimming Pool</span>
                            <input value="swimming-pool" type="checkbox" name="extras" />
                        </label>
                        <label for="extras">
                            <span>Finished Basement</span>
                            <input value="finished-basement" type="checkbox" name="extras" />
                        </label>
                        <label for="extras">
                            <span>Gym</span>
                            <input value="gym" type="checkbox" name="extras" />
                        </label>
                    </div>
                </div>
            </section>
        );
    }
}

export default Filter;