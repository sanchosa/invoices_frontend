import {fromJS, Record} from 'immutable'

export const GET_INVOICE = `InvoiceForm/GET_INVOICE`
export const SET_INVOICE = `InvoiceForm/SET_INVOICE`
export const STORE_INVOICE = `InvoiceForm/STORE_INVOICE`
export const SET_LOADING = `InvoiceForm/SET_LOADING`

export const InvoiceRecord = new Record({
	number: null,
	date: null,
	supplyDate: null,
	comment: null
})

export const initialState = fromJS({
	invoice: new InvoiceRecord(),
	loading: false
})
