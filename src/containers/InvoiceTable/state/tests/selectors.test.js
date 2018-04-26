import {List, fromJS} from 'immutable'
import {initialState} from '../constants'
import {makeSelectInvoices, makeSelectLoading} from '../selectors'
import invoices from './constants'

const mockInvoices = List(invoices)

describe(`InvoiceTable selectors`, () => {
	const store = fromJS({table: initialState})
		.setIn([`table`, `invoices`], mockInvoices)
		.setIn([`table`, `loading`], true)

	it(`Should select table invoices`, () => {
		const expected = mockInvoices.toJS()
		const selector = makeSelectInvoices()
		expect(selector(store)).toEqual(expected)
	})
	it(`Should select table loading state`, () => {
		const selector = makeSelectLoading()
		expect(selector(store)).toEqual(true)
	})
})
