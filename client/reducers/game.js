import { FIELD_TAPPED } from '../actions/field-tapped'

export default function updateGame(state = { turn: 0, winner: null }, { type, payload }) {
  switch (type) {
    // case SET_WINNER :
    //   return (Object.assign({}, state, { winner: state.winner }))

    case FIELD_TAPPED :
      const { turn } = state
      const nextTurn = turn + 1
      const { winner } = payload
      return (Object.assign({}, state, { turn: nextTurn, winner: winner }))

    default :
      return state
  }
}
