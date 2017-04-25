import React, { Component } from 'react';
import { Container, Content, Header, Item, Title, Subtitle, Button, Left, Right, Body, Icon, List, ListItem, Input } from 'native-base';
import { connect } from 'react-redux';
import {loadedList, llistaNomsAcabada} from '../actions';
import {Text, KeyboardAvoidingView} from 'react-native';


class SetNames extends Component {
  constructor() {
    super()
    this.state = {
      llistaNoms: []
    }
  }

  componentWillMount() {
    var PlayerArray = new Array();
    var i = 1;
    while(i<=this.props.jugadors) {
      var playernum = "Jugador " + i.toString()
      PlayerArray[playernum] = playernum
      i++;
    }
    this.props.loadedList(PlayerArray);
  }

  SetPlayerName(name, data) {
      //console.log(data + " _ " + name)
      this.state.llistaNoms[data] = name
      //console.log(this.state.llistaNoms)
      this.props.llistaNomsAcabada(this.state.llistaNoms)
  }


  render() {
    return(
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>La podrida</Title>
            <Subtitle style= {styles.subtitleStyle}>Configuració de jugadors</Subtitle>
          </Body>
          <Right/>
        </Header>
        <KeyboardAvoidingView behavior = 'padding' sytle = {styles.KeyboardAvodingStyle}>
          <List dataArray={this.props.dictJugadors} renderRow={(data) =>
              <ListItem>
                <Item underline>
                  <Input
                    placeholder = {data}
                    ref = {data}
                    onChangeText = {name => this.SetPlayerName(name,data)}
                    />
                </Item>
              </ListItem>
          } />
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

const styles = {
  subtitleStyle: {
    fontSize: 12,
    fontFamily:'Noteworthy'
  },
  KeyboardAvodingStyle: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20
  }
}

mapStateToProps = (state) => {
  console.log(state.appRender)
  return {
    jugadors: state.appRender.jugadors,
    rondes: state.appRender.rondes,
    dictJugadors: state.appRender.dictJugadors,
    llistaFinal: state.appRender.llistaNomsAcabada
  }
}
export default connect(mapStateToProps, {loadedList, llistaNomsAcabada})(SetNames);
