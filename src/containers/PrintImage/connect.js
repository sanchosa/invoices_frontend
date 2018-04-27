import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {makeSelectImgNumber} from 'containers/InvoiceTable/state/selectors'

const props = createStructuredSelector({
	number: makeSelectImgNumber()
})

export default Component => connect(props)(Component)