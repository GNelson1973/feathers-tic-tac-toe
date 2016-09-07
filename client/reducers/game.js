import { GAME_TURN } from '../actions/game-turn'

export default function updateGame(state = { turn: 0 }, { type, payload }) {
  switch (type) {
    case GAME_TURN :
      const nextTurn = state.turn + 1
      return (Object.assign({}, state, { turn: nextTurn }))

    default :
      return state
  }
}
