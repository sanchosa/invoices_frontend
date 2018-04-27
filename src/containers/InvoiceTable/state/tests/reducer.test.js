import {List, fromJS} from 'immutable'
import {initialState} from '../constants'
import InvoiceTableReducer from '../reducer'
import {setLoading, storeInvoices, setSorter, setImgNumber} from '../actions'
import invoices from './constants'
import {testValues} from 'common/constants'

const string = testValues.string

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
	it(`Should set sorter`, () => {
		const action = setSorter(string)
		const expectedResult = initialState.set(`sorter`, fromJS(string))
		expect(InvoiceTableReducer(initialState, action)).toEqual(expectedResult)
	})
	it(`Should set imgNumber`, () => {
		const action = setImgNumber(string)
		const expectedResult = initialState.set(`imgNumber`, string)
		expect(InvoiceTableReducer(initialState, action)).toEqual(expectedResult)
	})
})
