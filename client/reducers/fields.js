import { CREATE_GAME } from '../actions/create-game'
import { TICK_FIELD } from '../actions/tick-field'

export default function startBoard(state = [], { type, payload }) {
  switch (type) {
    case CREATE_GAME :
      const values =  ('0'.repeat(9).split(''))
      return values
        .map((value) => ({ value: value }))

    case TICK_FIELD :
      const { index, turn } = payload
      const newValue = (turn % 2 == 0) ? '1' : '2'

      return state.slice(0, index)
        .concat([Object.assign({}, state[index], { value: newValue })])
        .concat(state.slice(index + 1))

    default :
      return state
  }
}
