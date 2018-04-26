import {createSelector} from 'reselect'

const selectFirstPageDomain = (state) => state.get(`firstPage`)
const makeSelectFirstPage = () => createSelector(
	selectFirstPageDomain,
	substate => substate
)

export default makeSelectFirstPage
export {
	selectFirstPageDomain
}
