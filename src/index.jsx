import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from 'store'
import 'assets/index'

import App from 'containers/App'

const history = createHistory()
const store = configureStore(history)
const MOUNT_NODE = document.getElementById(`root`)

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App/>
		</ConnectedRouter>
	</Provider>,
	MOUNT_NODE
)