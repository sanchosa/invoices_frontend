import {
	GET_INVOICES,
	STORE_INVOICES,
	SET_LOADING,
	DELETE_INVOICE
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

export function deleteInvoice(payload) {
	return {
		type: DELETE_INVOICE,
		payload
	}
}