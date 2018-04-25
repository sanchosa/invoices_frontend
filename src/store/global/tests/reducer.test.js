import reducer from '../reducer'
import {
	setLoading,
	setError
} from '../actions'
import {initialState, ErrorRecord} from '../constants'

describe(`globalReducer`, () => {
	it(`Should return the initial state`, () => {
		expect(reducer(undefined, {})).toEqual(initialState)
	})
	it(`Should set error`, () => {
		const error = {
			code: 5,
			message: `test`,
			stack: `test`
		}
		const action = setError(error)
		const expectedResult = initialState.set(`error`, new ErrorRecord(error))
		expect(reducer(initialState, action)).toEqual(expectedResult)
	})
	it(`Should change loading state`, () => {
		const action = setLoading(true)
		const expectedResult = initialState.set(`loading`, true)
		expect(reducer(initialState, action)).toEqual(expectedResult)
	})
})