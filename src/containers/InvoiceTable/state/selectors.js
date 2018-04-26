import {createSelector} from 'reselect'

const selectTable = state => state.get(`table`)
export const makeSelectInvoices = () => createSelector(
	selectTable,
	table => {
		const invoices = table.get(`invoices`)
		return invoices && invoices.toJS()
	}
)
export const makeSelectLoading = () => createSelector(
	selectTable,
	table => table.get(`loading`)
)