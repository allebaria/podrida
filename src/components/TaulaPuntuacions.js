//https://github.com/Jeepeng/react-native-simple-table

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, Text} from 'react-native';
import Table from 'react-native-simple-table';
import {generarColumnes} from '../actions';


class TaulaPuntuacions extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    var i = 1;
    var columns = new Array();
    while(i<= this.props.numJugadors) {
      columns.push({
        title: this.props.llistaJugadors["Jugador " + i.toString()],
        dataIndex: "Jugador " + i.toString()
      })
      i++;
    }
    this.props.generarColumnes(columns);
  }

  render() {
    return(
      <View style = {styles.containerStyle}>
        <Text> Taula de resultats </Text>
        <Table columns = {this.props.columns}/>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    paddingTop: 20,
    alignItems: 'center',
    flex:1
  }
}

mapStateToProps = (state) => {
  //console.log(state.appRender.columnes)
  return {
    llistaJugadors: state.appRender.llistaNomsAcabada,
    numJugadors: state.appRender.jugadors,
    columns: state.appRender.columnes
  }
}

export default connect(mapStateToProps, {generarColumnes})(TaulaPuntuacions);
