import {createSelector} from 'reselect'

const selectForm = state => state.get(`form`)
export const makeSelectInvoice = () => createSelector(
	selectForm,
	form => form.get(`invoice`)
)
export const makeSelectLoading = () => createSelector(
	selectForm,
	form => form.get(`loading`)
)