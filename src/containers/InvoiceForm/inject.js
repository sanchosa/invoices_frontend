import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'
import injectSaga from 'utils/inject-saga'
import {makeSelectInvoice, makeSelectLoading} from './state/selectors'
import {getInvoice, setInvoice} from './state/actions'
import invoiceSaga from './state/saga'
import {DAEMON} from 'utils/constants'

const props = createStructuredSelector({
	invoice: makeSelectInvoice(),
	loading: makeSelectLoading()
})
const actions = dispatch => ({
	getInvoice: id => dispatch(getInvoice(id)),
	setInvoice: data => dispatch(setInvoice(data))
})

const withConnect = connect(props, actions)
const withSaga = injectSaga({invoice: invoiceSaga}, DAEMON)

export default Component => compose(withSaga, withConnect)(Component)
