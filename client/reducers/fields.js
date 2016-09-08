import { CREATE_GAME } from '../actions/create-game'
import { FIELD_TAPPED } from '../actions/field-tapped'

export default function startBoard(state = [], { type, payload }) {
  switch (type) {
    case CREATE_GAME :
      const values =  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
      return values
        .map((value) => ({ value: value }))

    case FIELD_TAPPED :
      const { turn } = payload.game
      const { index, fields } = payload

      const newValue = (turn % 2 == 0) ? 1 : 2

      return state.slice(0, index)
        .concat([Object.assign({}, fields[index], { value: newValue })])
        .concat(state.slice(index + 1))

    default :
      return state
  }
}
