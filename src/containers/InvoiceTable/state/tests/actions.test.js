import {getInvoices, storeInvoices, setLoading} from '../actions'
import {GET_INVOICES, STORE_INVOICES, SET_LOADING} from '../constants'
import invoices from './constants'

describe(`InvoiceTable actions`, () => {	
	it(`Should return type ${GET_INVOICES} and null payload`, () => {
		const expected = {type: GET_INVOICES, payload: null}
		expect(getInvoices()).toEqual(expected)
	})
	it(`Should return type ${STORE_INVOICES} and data payload`, () => {
		const expected = {type: STORE_INVOICES, payload: invoices}
		expect(storeInvoices(invoices)).toEqual(expected)
	})
	it(`Should return type ${SET_LOADING} and data payload`, () => {
		const expected = {type: SET_LOADING, payload: true}
		expect(setLoading(true)).toEqual(expected)
	})
})
