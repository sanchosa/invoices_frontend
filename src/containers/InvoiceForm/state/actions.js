import {
	GET_INVOICE,
	SET_INVOICE,
	STORE_INVOICE,
	SET_LOADING
} from './constants'

export function getInvoice(payload) {
	return {
		type: GET_INVOICE,
		payload
	}
}
export function setInvoice(payload) {
	return {
		type: SET_INVOICE,
		payload
	}
}
export function storeInvoice(payload) {
	return {
		type: STORE_INVOICE,
		payload
	}
}
export function setLoading(payload) {
	return {
		type: SET_LOADING,
		payload
	}
}