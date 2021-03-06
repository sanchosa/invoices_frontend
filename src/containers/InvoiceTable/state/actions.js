import {
	GET_INVOICES,
	STORE_INVOICES,
	SET_LOADING,
	DELETE_INVOICE,
	SET_SORTER,
	SET_IMG_NUMBER
} from './constants'

export function getInvoices(payload) {
	return {
		type: GET_INVOICES,
		payload
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

export function setSorter(payload) {
	return {
		type: SET_SORTER,
		payload
	}
}

export function setImgNumber(payload) {
	return {
		type: SET_IMG_NUMBER,
		payload
	}
}