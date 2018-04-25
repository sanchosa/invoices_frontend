import {fromJS} from 'immutable'
import {
	selectGlobal,
	makeSelectLoading,
	makeSelectError,
	selectRoute,
	makeSelectLocation
} from '../selectors'

describe(`Global state selectors`, () => {
	let mockedState
	beforeEach(() => {
		mockedState = fromJS({
			global: {
				loading: true,
				error: {
					code: 404,
					message: `User not found`
				}
			}
		})
	})
	it(`should select the global state`, () => {
		const expectedResult = mockedState.get(`global`)
		expect(selectGlobal(mockedState)).toEqual(expectedResult)
	})
	it(`should select loading from global state`, () => {
		const expectedResult = mockedState.getIn([`global`, `loading`])
		const selectLoading = makeSelectLoading()
		expect(selectLoading(mockedState)).toEqual(expectedResult)
	})
	it(`should select error from global state`, () => {
		const expectedResult = mockedState.getIn([`global`, `error`])
		const selectError = makeSelectError()
		expect(selectError(mockedState)).toEqual(expectedResult)
	})
})
describe(`Route state selectors`, () => {
	let mockedState
	beforeEach(() => {
		mockedState = fromJS({
			route: {
				location: {
					pathname: `/home`,
					search: `search`,
					hash: `fast`
				}
			}
		})
	})
	it(`should select the route state`, () => {
		const expectedResult = mockedState.get(`route`)
		expect(selectRoute(mockedState)).toEqual(expectedResult)
	})
	it(`should select location from route state`, () => {
		const expectedResult = mockedState.getIn([`route`, `location`]).toJS()
		const selectLocation = makeSelectLocation()
		expect(selectLocation(mockedState)).toEqual(expectedResult)
	})
})
