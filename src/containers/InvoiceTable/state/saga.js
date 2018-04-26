import {takeLatest, call, put} from 'redux-saga/effects'
import request from 'utils/request'
import {notification} from 'antd'
import {GET_INVOICES, DELETE_INVOICE} from './constants'
import {storeInvoices, setLoading} from './actions'

const url = `api/v1/invoice`
const showNotification = (number, err = null) => {
	const config = {
		message: `Deletion invoice #${number}`,
		duration: null,
		description: err !== null ? `Fail, response: ${err}` : `Successful`,
		placement: `topLeft`
	}
	const type = err !== null ? `error` : `info`

	notification[type](config)
}

function *fetchInvoices() {
	yield put(setLoading(true))
	const response = yield call(request.get, url)
	yield put(storeInvoices(response))
	yield put(setLoading(false))
}

function *deleteInvoice({payload: {id, number}}) {
	const response = yield call(request.delete, `${url}/${id}`)
	response === 1
		? showNotification(number)
		: showNotification(number, response)
	yield call(fetchInvoices)
}

export default function *tableSaga() {
	yield takeLatest(GET_INVOICES, fetchInvoices)
	yield takeLatest(DELETE_INVOICE, deleteInvoice)
}
