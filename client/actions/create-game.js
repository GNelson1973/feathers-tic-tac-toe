export const CREATE_GAME = 'CREATE_GAME'

export default function createGame(currentUser) {
  return {
    type: CREATE_GAME,
    payload: currentUser,
  }
}
