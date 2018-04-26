import {takeLatest, call, put, select} from 'redux-saga/effects'
import request from 'utils/request'
import {GET_INVOICES} from './constants'
import {storeInvoices, setLoading} from './actions'


function *fetchInvoices() {
	const url = `api/v1/invoice`
	yield put(setLoading(true))
	const response = yield call(request.get, url)
	yield put(storeInvoices(response))
	yield put(setLoading(false))
}

export default function *tableSaga() {
	yield takeLatest(GET_INVOICES, fetchInvoices)
}
