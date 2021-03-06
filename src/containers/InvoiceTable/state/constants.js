import {fromJS} from 'immutable'

export const GET_INVOICES = `InvoicesTable/GET_INVOICES`
export const STORE_INVOICES = `InvoicesTable/STORE_INVOICES`
export const SET_LOADING = `InvoicesTable/SET_LOADING`
export const DELETE_INVOICE = `InvoicesTable/DELETE_INVOICE`
export const SET_SORTER = `InvoicesTable/SET_SORTER`
export const SET_IMG_NUMBER = `InvoicesTable/SET_IMG_NUMBER`

export const initialState = fromJS({
	invoices: [],
	loading: false,
	sorter: null,
	imgNumber: 1
})
