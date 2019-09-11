import React, {
    Component
} from 'react';

export default class Filter extends Component {
    render() {
        return (
            <React.Fragment> 
                <div className="row row--no-gutter">
                    <div className="col-md-8 col-xs-12 col-lg-12 col--no-gutter">
                    <section className="search-area">
                        <input type="text" name="search"/>
                    </section>
                    </div>
                </div> 
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
            </React.Fragment>
        )
    }
}