import React, { useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { PAGES } from '../constant/urls'
import Login from '../containers/auth/login'
import Dashboard from '../containers/admin/dashboard'
import { ROLES } from '../constant'
import ForgotPassword from '../containers/auth/forgot-password'

const useRoute = () => {
	const { user } = useSelector(({ auth }) => auth)

	const userRole = useMemo(() => {
		if (!user || !user?.role) return ''
		const clone = { ...user }
		return clone?.role || ''
	}, [user])

	console.log('userRole', userRole)

	const routes = useMemo(
		() => [
			{
				id: 'initial_login',
				name: PAGES.AUTH.LOGIN_INITIAL,
				path: PAGES.AUTH.LOGIN_INITIAL.url,
				element: <Login />,
				isAuth: true,
				hasPlanLayout: true,
			},
			{
				id: 'login',
				name: PAGES.AUTH.LOGIN.name,
				path: PAGES.AUTH.LOGIN.url,
				element: <Login />,
				isAuth: true,
				hasPlanLayout: true,
			},
			{
				id: 'forgot-password',
				name: PAGES.AUTH.FORGOT_PASSWORD.name,
				path: PAGES.AUTH.FORGOT_PASSWORD.url,
				element: <ForgotPassword />,
				isAuth: true,
				hasPlanLayout: true,
			},
			{
				id: 'dashboard',
				name: PAGES.ADMIN.DASHBOARD.name,
				path: PAGES.ADMIN.DASHBOARD.url,
				element: <Dashboard />,
				isPrivate: true,
				roles: [ROLES.ADMIN, ROLES.USER],
			},
		],
		[]
	)

	const handleRoles = useCallback(
		(roles = []) => {
			if (!roles || !roles.length) return []
			const clone = [...roles]
			return clone.includes(userRole)
		},
		[userRole]
	)

	const authRoutes = useMemo(() => routes.filter((val) => val.isAuth), [routes])

	const privateRoutes = useMemo(() => {
		return routes.filter((val) => val.isPrivate && handleRoles(val.roles))
	}, [routes, handleRoles])

	console.log('privateRoutes', privateRoutes, authRoutes)

	return {
		routes,
		authRoutes,
		privateRoutes,
	}
}

export default useRoute
