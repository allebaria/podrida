export const NumPlayerChanged = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'max_round_changed',
      payload: Math.trunc(51/value)
    })
    dispatch({
      type: 'num_player_changed',
      payload: value
    })
  }
}
export const RoundNumberChanged = (value) => {
  return {
    type: 'round_number_changed',
    payload:value
  }
}

export const loadedList = (dict) => {
  return {
    type: 'llista_jugadors_feta',
    payload: dict
  }
}

export const startMatch = (jugadors, rondes) => {
  return {
    type: 'partida_començada',
    payload: {
      jugadors,
      rondes
    }
  }
}

export const llistaNomsAcabada = (llistaNoms) => {
  return {
    type: 'llista_noms_acabada',
    payload: llistaNoms
  }
}