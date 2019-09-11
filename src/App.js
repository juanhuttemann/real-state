import React, {Component} from 'react';
import './sass/App.scss';
import Header from './components/Header';
import Search from './components/Search';
import Filter from './components/Filter';
import Listings from './components/Listings';
import listings from './data/listingsData';




class App extends Component {
  constructor(){
    super()
    this.state = {
      values: [50],
      listings: listings.data,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 25,
      max_floor_space: 50000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gym: false,
      filteredData: listings.data
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.onSlide = this.onSlide.bind(this)


  }
  onSlide = (render, handle, value, un, percent) => {
    this.setState({
      min_price: Math.round(value[0]),
      max_price: Math.round(value[1]),
    }, () => {
      this.filteredData()
    })
  };

  change(event){
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
    this.setState({
      [name]: value
    }, () => {
      this.filteredData()
      console.log(this.state)
    })
  }

  filteredData(){
    var newData = this.state.listings.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space
    })
    this.setState({
      filteredData: newData
    })
  }
  render () {
    return (
      <div className="App">
        <Header /> 
        <div className="row row--no-gutter">
          <div className="col-xs-6 col-sm-5 col-md-3 col--no-gutter">
              <Filter change={this.change} globalState={this.state} onSlide={this.onSlide} />
            </div>
          <div className="col-xs-6 col-sm-7 col-md-9">
              <Search />
              <Listings listings={this.state.filteredData} />
            </div>
          </div>
      </div>
    )
  }
}

export default App;
