import React from 'react';
import {Header} from './components';
import axios from 'axios';
import {connect} from 'react-redux';

import {Home, Cart} from './pages';
import { Route } from 'react-router-dom';
import {setPizzas as setPizzasAction} from './redux/actions/pizzas';


function App({setPizzas, items}) {
  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({data}) => {
      // setPizzas(data.pizzas)
    });
  }, [])


  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route path="/" render={() => <Home items={items}/>} exact />
        <Route path="/cart" component={Cart} exact/>
      </div>
    </div>
  )
}

export default App;

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   }
// }

// const dispatches = dispatch => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//   }
// }

// export default connect(mapStateToProps, dispatches)(App);
