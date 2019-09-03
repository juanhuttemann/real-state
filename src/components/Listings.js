import React, { Component } from 'react';

class Listings extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="listings">
                <section className="search-area">
                    <input type="text" name="search" />
                </section>
                <section className="sortby-area">
                    <div>390 results found</div>
                    <div className="sort-options">
                        <select name="sortby" className="sortby">
                            <option value="price-asc">Highest Price</option>
                            <option value="price-desc">Lowest Price</option>
                        </select>
                    </div>
                </section>
                <section className="listings-results">

                </section>
                <section className="pagination">

                </section>
            </section>
         );
    }
}
 
export default Listings;