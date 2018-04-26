import {createSelector} from 'reselect'

const selectTable = state => state.get(`table`)
export const makeSelectInvoices = () => createSelector(
	selectTable,
	table => table.get(`invoices`).toJS()
)
export const makeSelectLoading = () => createSelector(
	selectTable,
	table => table.get(`loading`)
)