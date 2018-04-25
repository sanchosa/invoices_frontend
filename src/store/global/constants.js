import {Record, fromJS} from 'immutable'

export const SET_ERROR = `App/SET_ERROR`
export const SET_LOADING = `App/SET_LOADING`

export const ErrorRecord = new Record({
	code: 1,
	message: ``,
	stack: ``
})

export const initialState = fromJS({
	error: new ErrorRecord({code: 0}),
	loading: false,
	location: null
})