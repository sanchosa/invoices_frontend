import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'
import injectSaga from 'utils/inject-saga'
import {makeSelectInvoices, makeSelectLoading, makeSelectSorter} from './state/selectors'
import {getInvoices, deleteInvoice, setSorter, setImgNumber} from './state/actions'
import invoicesSaga from './state/saga'
import {DAEMON} from 'utils/constants'

const props = createStructuredSelector({
	invoices: makeSelectInvoices(),
	loading: makeSelectLoading(),
	sorter: makeSelectSorter()
})
const actions = dispatch => ({
	getInvoices: () => dispatch(getInvoices()),
	deleteInvoice: id => dispatch(deleteInvoice(id)),
	setSorter: sorter => dispatch(setSorter(sorter)),
	setImgNumber: () => dispatch(setImgNumber())
})

const withConnect = connect(props, actions)
const withSaga = injectSaga({invoices: invoicesSaga}, DAEMON)

export default Component => compose(withSaga, withConnect)(Component)
