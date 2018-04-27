import {fromJS} from 'immutable'
import {
	STORE_INVOICES,
	SET_LOADING,
	SET_SORTER,
	initialState
} from './constants'

export default (state = initialState, action) => {
	switch (action.type) {
	case STORE_INVOICES:
		return state.set(`invoices`, fromJS(action.payload))
	case SET_LOADING:
		return state.set(`loading`, action.payload)
	case SET_SORTER:
		return state.set(`sorter`, fromJS(action.payload))
	default:
		return state
	}
}
