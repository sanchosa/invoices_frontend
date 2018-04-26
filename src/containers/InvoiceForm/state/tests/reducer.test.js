import {initialState, InvoiceRecord} from '../constants'
import InvoiceFormReducer from '../reducer'
import {setLoading, storeInvoice} from '../actions'
import invoices from './constants'
import mockInvoice from './constants'

const mockInvoiceRecord = new InvoiceRecord(mockInvoice)

describe(`InvoiceForm reducer`, () => {
	it(`Should return the initial state`, () => {
		expect(InvoiceFormReducer(undefined, {})).toEqual(initialState)
	})
	it(`Should set loading state to true`, () => {
		const action = setLoading(true)
		const expectedResult = initialState.set(`loading`, true)
		expect(InvoiceFormReducer(initialState, action)).toEqual(expectedResult)
	})
	it(`Should set invoice`, () => {
		const action = storeInvoice(mockInvoice)
		const expectedResult = initialState.set(`invoice`, mockInvoiceRecord)
		expect(InvoiceFormReducer(initialState, action)).toEqual(expectedResult)
	})
})
