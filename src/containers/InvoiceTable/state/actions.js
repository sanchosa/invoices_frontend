import {
	GET_INVOICES,
	STORE_INVOICES,
	SET_LOADING
} from './constants'

export function getInvoices() {
	return {
		type: GET_INVOICES,
		payload: null
	}
}

export function storeInvoices(payload) {
	return {
		type: STORE_INVOICES,
		payload
	}
}

export function setLoading(payload) {
	return {
		type: SET_LOADING,
		payload
	}
}