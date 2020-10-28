import { INCREMENT_COUNT, DECREMENT_COUNT } from './enum'

export const incrementAction = () => (
    { type: INCREMENT_COUNT }
)

export const decrementAction = () => (
    { type: DECREMENT_COUNT }
)