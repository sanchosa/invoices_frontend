import {
	STORE_INVOICE,
	SET_LOADING,
	initialState,
	InvoiceRecord
} from './constants'

export default (state = initialState, action) => {
	switch (action.type) {
	case STORE_INVOICE:
		return state.set(`invoice`, new InvoiceRecord(action.payload))
	case SET_LOADING:
		return state.set(`loading`, action.payload)
	default:
		return state
	}
}
