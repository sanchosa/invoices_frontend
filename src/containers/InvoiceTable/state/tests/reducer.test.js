import {fromJS} from 'immutable'
import firstPageReducer from '../reducer'

describe(`firstPageReducer`, () => {
	it(`returns the initial state`, () => {
		expect(firstPageReducer(undefined, {})).toEqual(fromJS({}))
	})
})
