const INITIAL_STATE = {
  numPlayers: 0,
  maxRound:52,
  numRound:0,
  llistaFinal: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'num_player_changed':
      return {...state,
        numPlayers: action.payload,
      }
    case 'max_round_changed':
      return {...state, maxRound:action.payload}

    case 'round_number_changed':
      return {...state, numRound: action.payload}

    default:
      return state
    }
};
