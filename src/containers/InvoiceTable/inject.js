import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'
import injectSaga from 'utils/inject-saga'
import {makeSelectInvoices, makeSelectLoading} from './state/selectors'
import {getInvoices, deleteInvoice} from './state/actions'
import invoicesSaga from './state/saga'

const props = createStructuredSelector({
	invoices: makeSelectInvoices(),
	loading: makeSelectLoading()
})
const actions = dispatch => ({
	getInvoices: () => dispatch(getInvoices()),
	deleteInvoice: id => dispatch(deleteInvoice(id))
})

const withConnect = connect(props, actions)
const withSaga = injectSaga({
	invoices: invoicesSaga
})

export default Component => compose(withSaga, withConnect)(Component)
