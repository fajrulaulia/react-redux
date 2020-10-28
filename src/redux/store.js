import { createStore } from 'redux'

import { INCREMENT_COUNT, DECREMENT_COUNT } from './enum'

const inititalState = {
    count: 0,
}

const rootreducer = (state = inititalState, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ... state,
                count: state.count + 1
            }
        case DECREMENT_COUNT:
            return {
                ... state,
                count: state.count - 1
            }
        default:
            return state
    }
}

export default createStore(rootreducer)