import {
	getInvoices,
	storeInvoices,
	setLoading,
	deleteInvoice,
	setSorter,
	setImgNumber
} from '../actions'
import {
	GET_INVOICES,
	STORE_INVOICES,
	SET_LOADING,
	DELETE_INVOICE,
	SET_SORTER,
	SET_IMG_NUMBER
} from '../constants'
import invoices from './constants'
import {testValues} from 'common/constants'

const string = testValues.string

describe(`InvoiceTable actions`, () => {
	it(`Should return type ${GET_INVOICES} and data payload`, () => {
		const expected = {type: GET_INVOICES, payload: string}
		expect(getInvoices(string)).toEqual(expected)
	})
	it(`Should return type ${STORE_INVOICES} and data payload`, () => {
		const expected = {type: STORE_INVOICES, payload: invoices}
		expect(storeInvoices(invoices)).toEqual(expected)
	})
	it(`Should return type ${SET_LOADING} and data payload`, () => {
		const expected = {type: SET_LOADING, payload: true}
		expect(setLoading(true)).toEqual(expected)
	})
	it(`Should return type ${DELETE_INVOICE} and data payload`, () => {
		const expected = {type: DELETE_INVOICE, payload: invoices}
		expect(deleteInvoice(invoices)).toEqual(expected)
	})
	it(`Should return type ${SET_SORTER} and data payload`, () => {
		const expected = {type: SET_SORTER, payload: string}
		expect(setSorter(string)).toEqual(expected)
	})
	it(`Should return type ${SET_IMG_NUMBER} and data payload`, () => {
		const expected = {type: SET_IMG_NUMBER, payload: string}
		expect(setImgNumber(string)).toEqual(expected)
	})
})
