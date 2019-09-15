import React, { Component } from 'react';
import ListingBox from './ListingBox';
import ListingLong from './ListingLong';


class Listings extends Component {
  render() {
    var {listings} = this.props

    const items = listings.map((item, key) => {
      if(this.props.globalState.view === 'box'){
        return (<ListingBox key={key} data={item} />)
      } else {
        return (<ListingLong key={key} data={item} />)
      }
    }
    );

    
    if (listings === undefined || listings.length === 0 ) {
      return "Sorry there's no results"
    }

    return (
      <section id="listings">
        <section className="listings-results">
          <div className="row row--no-gutter">
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