import React from 'react';
import {Header} from './components';
import axios from 'axios';
import {connect} from 'react-redux';

import {Home, Cart} from './pages';
import { Route } from 'react-router-dom';
import {setPizzas as setPizzasAction} from './redux/actions/pizzas';


class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3000/db.json").then(({data}) => {
      this.props.setPizzas(data.pizzas)
    });
  }

  render() {
    return(
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items}/>} exact />
          <Route path="/cart" component={Cart} exact/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  }
}

const dispatches = dispatch => {
  return {
    setPizzas : (items) => dispatch(setPizzasAction(items)),
  }
}

export default connect(mapStateToProps, dispatches)(App);
