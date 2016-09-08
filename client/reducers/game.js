import { FIELD_TAPPED } from '../actions/field-tapped'

export default function updateGame(state = { turn: 0, winner: 0 }, { type, payload }) {
  const { turn, winner } = state
  switch (type) {
    // case SET_WINNER :
    //   return (Object.assign({}, state, { winner: state.winner }))

    case FIELD_TAPPED :
      const nextTurn = turn + 1
      return (Object.assign({}, state, { turn: nextTurn }))

    default :
      return state
  }
}
