export const TICK_FIELD = 'TICK_FIELD'

export default function tickField(index, turn) {
  return { type: TICK_FIELD, payload: { index, turn } }
}
