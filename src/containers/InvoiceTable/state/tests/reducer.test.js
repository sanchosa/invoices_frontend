import {List} from 'immutable'
import {initialState} from '../constants'
import InvoiceTableReducer from '../reducer'
import {setLoading, storeInvoices} from '../actions'
import invoices from './constants'

describe(`InvoiceTable reducer`, () => {
	it(`Should returns the initial state`, () => {
		expect(InvoiceTableReducer(undefined, {})).toEqual(initialState)
	})
	it(`Should set loading state to true`, () => {
		const action = setLoading(true)
		const expectedResult = initialState.set(`loading`, true)
		expect(InvoiceTableReducer(initialState, action)).toEqual(expectedResult)
	})
	it(`Should set invoices`, () => {
		const action = storeInvoices(invoices)
		const expectedResult = initialState.set(`invoices`, List(invoices))
		expect(InvoiceTableReducer(initialState, action)).toEqual(expectedResult)
	})
})
