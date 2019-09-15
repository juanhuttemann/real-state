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
                        <input type="text" name="search" onChange={this.props.change} />
                    </section>
                    </div>
                </div> 
                <section className="sortby-area">
                    <div className="results">{this.props.globalState.filteredData.length} results found</div>
                    <div className="sort-options">
                        <select name="sortby" className="sortby" onChange={this.props.change}>
                            <option value="price-dsc">Lowest Price</option>
                            <option value="price-asc">Highest Price</option>
                        </select>
                        <div className="view">
                            <i className="fa fa-th-list" aria-hidden="true" onClick={this.props.changeView.bind(null, 'long')}></i>
                            <i className="fa fa-th" aria-hidden="true" onClick={this.props.changeView.bind(null, 'box')}></i>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}