import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import  StartView  from './components/StartView';
import { connect } from 'react-redux';
import {View, Text} from 'react-native';
import ConditionalRenderingManager from './components/ConditionalRenderingManager';

class App extends Component {


  render() {
    return(
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <ConditionalRenderingManager/>
      </Provider>
    )
  }
}

export default App;
