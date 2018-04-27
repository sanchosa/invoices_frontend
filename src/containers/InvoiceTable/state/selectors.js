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
export const makeSelectSorter = () => createSelector(
	selectTable,
	table => {
		const sorter = table.get(`sorter`)
		return sorter && sorter.toJS()
	}
)
export const makeSelectImgNumber = () => createSelector(
	selectTable,
	table => table.get(`imgNumber`)
)