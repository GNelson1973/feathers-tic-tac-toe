export const FIELD_TAPPED = 'FIELD_TAPPED'

export default function fieldTapped(index, fields, game, winner) {
  return {
    type: FIELD_TAPPED,
    payload: { index, fields, game, winner },
  }
}
