import {combineReducers} from 'redux-immutable'
import globalReducer from './global/reducer'
import InvoiceTableReducer from 'containers/InvoiceTable/state/reducer'
import InvoiceFormReducer from 'containers/InvoiceForm/state/reducer'

export default function createReducer(injectedReducers) {
	return combineReducers({
		global: globalReducer,
		table: InvoiceTableReducer,
		form: InvoiceFormReducer,
		...injectedReducers
	})
}
