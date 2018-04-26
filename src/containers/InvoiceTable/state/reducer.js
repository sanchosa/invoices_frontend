import {fromJS} from 'immutable'
import {
	STORE_INVOICES,
	SET_LOADING,
	initialState
} from 'containers/InvoiceTable/state/constants'

export default (state = initialState, action) => {
	switch (action.type) {
	case STORE_INVOICES:
		return state.set(`invoices`, fromJS(action.payload))
	case SET_LOADING:
		return state.set(`loading`, action.payload)
	default:
		return state
	}
}
