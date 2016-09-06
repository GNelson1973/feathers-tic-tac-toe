import { CREATE_GAME } from '../actions/create-game'

export default function startBoard(state = [], { type, payload }) {
  switch (type) {
    case CREATE_GAME :
      return ('0'.repeat(9).split(''))

    default :
      return state
  }
}
