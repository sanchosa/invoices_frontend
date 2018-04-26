import {fromJS} from 'immutable'
import {initialState, InvoiceRecord} from '../constants'
import {makeSelectInvoice, makeSelectLoading} from '../selectors'
import mockInvoice from './constants'

const mockInvoiceRecord = new InvoiceRecord(mockInvoice)

describe(`InvoiceForm selectors`, () => {
	const store = fromJS({form: initialState})
		.setIn([`form`, `invoice`], mockInvoiceRecord)
		.setIn([`form`, `loading`], true)

	it(`Should select form invoice`, () => {
		const expected = mockInvoiceRecord
		const selector = makeSelectInvoice()
		expect(selector(store)).toEqual(expected)
	})
	it(`Should select form loading state`, () => {
		const selector = makeSelectLoading()
		expect(selector(store)).toEqual(true)
	})
})
