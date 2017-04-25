const INITIAL_STATE = {
  partidaCom:false,
  jugadors:0,
  rondes:0,
  columnes: []
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

    default:
      return state;

  }
}
