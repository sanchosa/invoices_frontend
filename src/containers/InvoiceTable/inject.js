import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'
import injectSaga from 'utils/injectSaga'
// import makeSelectFirstPage from './selectors'
// import {someAction} from './actions'
import saga from './state/saga'

const props = createStructuredSelector({
	firstpage: makeSelectFirstPage()
})
const actions = dispatch => {
	onClick: e => dispatch(someAction(e.target.value))
}

const withConnect = connect(props, actions)
// const withReducer = injectReducer({
// 	firstpage: reducer,
// })
const withSaga = injectSaga({
	firstpage: saga
})

export default Component => compose(
	withSaga,
	withConnect
)(Component)
