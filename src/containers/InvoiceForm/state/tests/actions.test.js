import {getInvoice, storeInvoice, setLoading, setInvoice} from '../actions'
import {GET_INVOICE, STORE_INVOICE, SET_LOADING, SET_INVOICE} from '../constants'
import {testValues} from 'common/constants'

const string = testValues.string

describe(`InvoiceForm actions`, () => {
	it(`Should return type ${GET_INVOICE} and data payload`, () => {
		const expected = {type: GET_INVOICE, payload: string}
		expect(getInvoice(string)).toEqual(expected)
	})
	it(`Should return type ${STORE_INVOICE} and data payload`, () => {
		const expected = {type: STORE_INVOICE, payload: string}
		expect(storeInvoice(string)).toEqual(expected)
	})
	it(`Should return type ${SET_LOADING} and data payload`, () => {
		const expected = {type: SET_LOADING, payload: true}
		expect(setLoading(true)).toEqual(expected)
	})
	it(`Should return type ${SET_INVOICE} and data payload`, () => {
		const expected = {type: SET_INVOICE, payload: string}
		expect(setInvoice(string)).toEqual(expected)
	})
})
