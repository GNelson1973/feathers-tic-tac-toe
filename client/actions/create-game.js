export const CREATE_GAME = 'CREATE_GAME'

export default function createGame(player2) {
  return {
    type: CREATE_GAME,
    payload: player2,
  }
}
