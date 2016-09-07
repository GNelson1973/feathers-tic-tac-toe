export const TICK_FIELD = 'TICK_FIELD'

export default function tickField(index) {
  return { type: TICK_FIELD, payload: index }
}
