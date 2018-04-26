import {combineReducers} from 'redux-immutable'
import globalReducer from './global/reducer'
import invoiceTableReducer from 'containers/invoiceTable/state/reducer'

export default function createReducer(injectedReducers) {
	return combineReducers({
		global: globalReducer,
		table: invoiceTableReducer,
		...injectedReducers
	})
}
