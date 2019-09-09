import React, {Component} from 'react';
import './sass/App.scss';
import Header from './components/Header';
import Filter from './components/Filter';
import Listings from './components/Listings';


class App extends Component {
  constructor(){
    super()
    this.state = {
      min_price: 0,
      max_price: 10000000,
    }
    this.change = this.change.bind(this)
  }

  change(event){
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
    })
  }
  render () {
    return (
      <div className="App">
        <Header /> 
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} />
          <Listings />
        </section>  
      </div>
    )
  }
}

export default App;
