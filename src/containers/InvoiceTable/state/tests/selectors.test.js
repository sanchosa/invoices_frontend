import {List, fromJS} from 'immutable'
import {initialState} from '../constants'
import {makeSelectInvoices, makeSelectLoading, makeSelectSorter} from '../selectors'
import invoices from './constants'
import {testValues} from 'common/constants'

const string = testValues.string
const mockInvoices = List(invoices)

describe(`InvoiceTable selectors`, () => {
	const sorter = {field: string}
	const store = fromJS({table: initialState})
		.setIn([`table`, `invoices`], mockInvoices)
		.setIn([`table`, `loading`], true)
		.setIn([`table`, `sorter`], fromJS(sorter))

	it(`Should select table invoices`, () => {
		const expected = mockInvoices.toJS()
		const selector = makeSelectInvoices()
		expect(selector(store)).toEqual(expected)
	})
	it(`Should select table loading state`, () => {
		const selector = makeSelectLoading()
		expect(selector(store)).toEqual(true)
	})
	it(`Should select table sorter state`, () => {
		const selector = makeSelectSorter()
		expect(selector(store)).toEqual(sorter)
	})
})
