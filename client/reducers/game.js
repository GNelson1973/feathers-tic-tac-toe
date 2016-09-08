import { CREATE_GAME } from '../actions/create-game'
import { FIELD_TAPPED } from '../actions/field-tapped'

export default function updateGame(state = { turn: 0, winner: null, player2: "" }, { type, payload }) {
  switch (type) {
    case CREATE_GAME :
      return (Object.assign({}, state, { player2: payload }))

    case FIELD_TAPPED :
      const { turn } = state
      const nextTurn = turn + 1
      const { winner } = payload

      return (Object.assign({}, state, { turn: nextTurn, winner: winner }))

    default :
      return state
  }
}
