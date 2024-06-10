import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persister, store } from './redux'
import Login from './containers/auth/login'

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persister}>
				<Login />
			</PersistGate>
		</Provider>
	)
}

export default App
