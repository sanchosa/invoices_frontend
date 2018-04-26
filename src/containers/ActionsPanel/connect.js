import {connect} from 'react-redux'
import {storeInvoice} from 'containers/InvoiceForm/state/actions'

const actions = dispatch => ({
	storeInvoice: () => dispatch(storeInvoice())
})

export default Component => connect(null, actions)(Component)