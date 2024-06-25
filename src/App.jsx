import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persister, store } from './redux'
import Routing from './routes'

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persister}>
				<Routing />
			</PersistGate>
		</Provider>
	)
}

export default App
