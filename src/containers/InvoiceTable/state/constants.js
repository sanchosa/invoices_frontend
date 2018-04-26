import {fromJS} from 'immutable'

export const GET_INVOICES = `InvoicesTable/GET_INVOICES`
export const STORE_INVOICES = `InvoicesTable/STORE_INVOICES`
export const SET_LOADING = `InvoicesTable/SET_LOADING`

export const initialState = fromJS({
	invoices: [],
	loading: false
})
