import {takeLatest, call, put} from 'redux-saga/effects'
import request from 'utils/request'
import {GET_INVOICE, SET_INVOICE} from './constants'
import {storeInvoice, setLoading} from './actions'
import {invoiceUrl} from 'common/constants'

function *fetchInvoice({payload: id}) {
	yield put(setLoading(true))
	const response = yield call(request.get, `${invoiceUrl}/${id}`)
	yield put(storeInvoice(response))
	yield put(setLoading(false))
}

function *setInvoice({payload}) {
	const req = payload.id ? request.put : request.post
	const response = yield call(req, invoiceUrl, payload)
}

export default function *tableSaga() {
	yield takeLatest(GET_INVOICE, fetchInvoice)
	yield takeLatest(SET_INVOICE, setInvoice)
}
