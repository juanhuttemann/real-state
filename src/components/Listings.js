import React, { Component } from 'react';
import Listing from './Listing';

class Listings extends Component {
  render() {
    var {listings} = this.props

    const items = listings.map((item, key) =>
      <Listing key={key} data={item} />
    );

    
    if (listings === undefined || listings.length === 0 ) {
      return "Sorry there's no results"
    }

    return (
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" />
        </section>
        <section className="sortby-area">
          <div className="results">390 results found</div>
          <div className="sort-options">
            <select name="sortby" className="sortby">
              <option value="price-asc">Highest Price</option>
              <option value="price-desc">Lowest Price</option>
            </select>
            <div className="view">
              <i className="fa fa-th-list" aria-hidden="true"></i>
              <i className="fa fa-th" aria-hidden="true"></i>
            </div>
          </div>
        </section>
        <section className="listings-results">
          <div className="row">
            {items}
          </div>
        </section>
        <section id="pagination">
          <ul className="pages">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    );
  }
}

export default Listings;