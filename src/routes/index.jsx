import React from 'react'
import { Route, Routes } from 'react-router-dom'
import useRoute from '../hooks/useRoute'
import AuthLayout from '../layout/AuthLayout'
import PrivateLayout from '../layout/MainLayout'

const Routing = ({ ...props }) => {
	const { authRoutes, privateRoutes } = useRoute()
	return (
		<Routes {...props}>
			<Route path="/" element={<AuthLayout defaultAccess />}>
				{authRoutes?.map(({ id, ...val }) => (
					<Route index key={id} {...val} />
				))}
			</Route>
			<Route path="/" element={<PrivateLayout />}>
				{privateRoutes?.map(({ id, ...val }) => (
					<Route index key={id} {...val} />
				))}
			</Route>
		</Routes>
	)
}

export default Routing
