const INITIAL_STATE = {
  partidaCom:false,
  jugadors:0,
  rondes:0,
  columnes: [],
  currentRound: "Ronda 1",
  llistaRondes: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'partida_començada':
      return {
        ...state,
        partidaCom: true,
        jugadors: action.payload.jugadors,
        rondes: action.payload.rondes
      }
    case 'llista_jugadors_feta':
      return {
        ...state,
        dictJugadors:action.payload
      }
    case 'llista_noms_acabada':
      return {
        ...state,
        llistaNomsAcabada: action.payload
      }
    case 'fet':
      return {
        ...state,
        partidaCom: 'nomsFets'
      }
    case 'generar_columnes':
      return {
        ...state,
        columnes: action.payload
      }

    case 'generar_llista_rondes':
      return {
        ...state,
        llistaRondes:action.payload
      }
    case 'canvi_de_ronda':
    return {
      ...state,
      currentRound: action.payload
    }
    default:
      return state;

  }
}
