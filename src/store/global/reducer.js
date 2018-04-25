import {
	SET_LOADING,
	SET_ERROR,
	ErrorRecord,
	initialState
} from './constants'
import {LOCATION_CHANGE} from 'react-router-redux'

export default function appReducer(state = initialState, action) {
	switch (action.type) {
	case SET_ERROR: {
		return state.set(`error`, new ErrorRecord(action.payload))
	}
	case SET_LOADING: {
		return state.set(`loading`, action.payload)
	}
	case LOCATION_CHANGE: {
		return action.type === LOCATION_CHANGE
			? state.merge({location: action.payload})
			: state
	}
	default: return state
	}
}
