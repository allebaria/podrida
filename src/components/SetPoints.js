import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, Text} from 'react-native';
import {Container, Picker, Content, Header, Item, Title, Subtitle, Button, Left, Right, Body, Icon, List, ListItem, Input } from 'native-base';
import {ferLlistaRondes, canviDeRonda} from '../actions';
import SimpleStepper from 'react-native-simple-stepper';


class SetPoints extends Component {
  constructor() {
    super()
    this.modificarPunts = this.modificarPunts.bind(this);
    this.canviDeRonda = this.canviDeRonda.bind(this);
  }

  componentWillMount () {
    //console.log(this.props.llistaFinal);
    //llista amb el numero de rondes
    var i = 1;
    var llistaRondes = new Array();
    while(i<=this.props.numRondes) {
      llistaRondes.push("Ronda " + i.toString())
      i++;
    }
    //console.log(llistaRondes)
    this.props.ferLlistaRondes(llistaRondes);
    //console.log(this.props.llistaRondes)

    //objecte amb els jugadors, les rondes i els punts a cadascuna

    var RoundPlayerPointsObj = new Array();
    this.props.llistaFinal.map((jugador) => (
      RoundPlayerPointsObj.push({
        Nomjugador: jugador,
        puntsRonda: ""
      })

      this.props.llistaRondes.map((ronda) => (
          if(RoundPlayerPointsObj.Nomjugador === jugador) {
            RoundPlayerPointsObj.puntsRonda.push({
              ronda: ""
            })
          }
      ))
    ))
    console.log(RoundPlayerPointsObj);

  }

  modificarPunts(value, nomJugador) {
    console.log(nomJugador);
  }

  canviDeRonda(novaRonda) {
    this.props.canviDeRonda(novaRonda);
  }

  render() {
    return (
      <Container>
          <Header>
            <Left/>
            <Body>
              <Title>La podrida</Title>
              <Subtitle style= {styles.subtitleStyle}>Aplicar puntuacions</Subtitle>
            </Body>
            <Right/>
          </Header>
          <View style = {styles.pickerViewStyle}>
            <Picker
              iosHeader="Escull la ronda que vols puntuar"
              mode="dropdown"
              selectedValue={this.props.currentRound}
              onValueChange={(value) => this.canviDeRonda(value)}>
              {this.props.llistaRondes.map((ronda) => (
                <Picker.Item
                  key   = {ronda}
                  value = {ronda}
                  label = {ronda}
                />
              ))}
            </Picker>
          </View>

        <List dataArray={this.props.llistaFinal} renderRow={(data) =>
            <ListItem icon>
              <Left>
                  <Icon name = 'md-person'/>
              </Left>
              <Body>
                <Text>{data}</Text>
              </Body>
              <Right>
                <View style = {styles.pointsViewStyle}>
                  <Text>0</Text>
                </View>
                <SimpleStepper
                  initialValue = {0}
                  stepValue = {5}
                  minimumValue = {-100}
                  maximumValue = {100}
                  padding = {2}
                  valueChanged = {value => this.modificarPunts(value, data)}
                />
              </Right>
            </ListItem>
        } />

      </Container>
    )
  }

}

const styles = {
  subtitleStyle: {
    fontSize: 12,
    fontFamily:'Noteworthy'
  },
  pointsViewStyle: {
    paddingRight:10
  },
  pickerViewStyle: {
    alignItems: 'center'
  }
}

const mapStateToProps = (state) => {
  return {
    numJugadors: state.appRender.jugadors,
    numRondes: state.appRender.rondes,
    llistaFinal: state.appRender.llistaNomsAcabada,
    llistaRondes: state.appRender.llistaRondes,
    currentRound: state.appRender.currentRound
  }
}

export default connect(mapStateToProps, {ferLlistaRondes, canviDeRonda})(SetPoints);
