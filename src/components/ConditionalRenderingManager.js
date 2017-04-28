import React, {Component} from 'react';
import ReduxThunk from 'redux-thunk';
import  StartView  from './StartView';
import { connect } from 'react-redux';
import {View, Text} from 'react-native';
import SetNames from './SetNames';
import TaulaPuntuacions from './TaulaPuntuacions';
import SetPoints from './SetPoints';

class ConditionalRenderingManager extends Component {

  renderContent() {
    switch (this.props.partidaCom) {
      case false:
        return (
          <StartView/>
        )
      case true:
        return(
            <SetNames/>
        )
      case 'nomsFets':
        return(
            <SetPoints/>
        )
      default:
        return(
          <View>
            <Text>error</Text>
          </View>
        )
    }
  }

  render() {
    return(
      this.renderContent()
    )
  }
}

const mapStateToProps = (state) => {
  return {
    partidaCom: state.appRender.partidaCom,
    jugadors: state.appRender.jugadors,
    rondes: state.appRender.rondes
  }
}

export default connect(mapStateToProps)(ConditionalRenderingManager);
