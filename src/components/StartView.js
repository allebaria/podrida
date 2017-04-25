import React, {Component} from 'react';
import { Text, View } from 'react-native'
import { Container, Content, Header, Title, Subtitle, Button, Left, Right, Body, Icon, Card, CardItem, Badge } from 'native-base';
import SimpleStepper from 'react-native-simple-stepper';
import {NumPlayerChanged, RoundNumberChanged, startMatch} from '../actions';
import { connect } from 'react-redux';

class StartView extends Component {
  constructor () {
    super()

    this.valueChanged = this.valueChanged.bind(this)
    this.RoundValueChanged = this.RoundValueChanged.bind(this)
    this.StartMatch = this.StartMatch.bind(this)
  }


  valueChanged (value) {
    this.props.NumPlayerChanged(value)
  }

  RoundValueChanged(value){
    this.props.RoundNumberChanged(value)
  }

  StartMatch() {
    this.props.startMatch(this.props.numPlayers, this.props.numRound)
  }

  render() {
    return(
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>La podrida</Title>
            <Subtitle style = {styles.subtitleStyle}>Configuració de partida</Subtitle>
          </Body>
          <Right/>
        </Header>
        <View style = {styles.viewStyle}>
        <Text style = {styles.titlesStyle}>Nombre de jugadors: </Text>
          <Text style= {styles.numberStyle}>{this.props.numPlayers}</Text>
          <SimpleStepper
            initialValue = {0}
            stepValue = {1}
            minimumValue = {0}
            maximumValue = {200}
            valueChanged = {this.valueChanged}
          />
        <Text style = {styles.titlesStyle}>Fins a quina ronda vol arribar? (màxim fins a la ronda {this.props.maxRound}): </Text>
        <Text style= {styles.numberStyle}>{this.props.numRound}</Text>
        <SimpleStepper
          initialValue = {0}
          stepValue = {1}
          minimumValue = {0}
          maximumValue = {200}
          valueChanged = {this.RoundValueChanged}
        />
        <View style = {{paddingTop:20, paddingBottom:20}}/>
        <Button
        onPress = {this.StartMatch}
        block
        info
        >
          <Text style = {styles.buttonTextStyle}>Començar la partida!</Text>
        </Button>
        </View>
      </Container>


    )
  }
}

const styles = {
  titlesStyle: {
    fontFamily:'Noteworthy',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10
  },
  viewStyle: {
    alignItems: 'center'
  },
  numberStyle: {
    fontFamily:'Noteworthy',
    fontSize:30,
    paddingBottom:20,
    paddingTop:10
  },
  buttonTextStyle: {
    fontFamily:'Noteworthy',
    fontSize:15
  },
  subtitleStyle: {
    fontSize: 12,
    fontFamily:'Noteworthy'
  }
}

const mapStateToProps = state => {
    return {
      numPlayers: state.config.numPlayers,
      maxRound: state.config.maxRound,
      numRound: state.config.numRound,

    }
}

export default connect(mapStateToProps, {NumPlayerChanged, RoundNumberChanged, startMatch})(StartView);
