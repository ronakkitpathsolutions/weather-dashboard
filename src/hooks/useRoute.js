import React, { useCallback, useMemo } from 'react'
import { PAGES } from '../constant/urls'
import Login from '../containers/auth/login'
import Dashboard from '../containers/admin/dashboard'
import { ROLES } from '../constant'

const useRoute = () => {
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
				id: 'dashboard',
				name: PAGES.ADMIN.DASHBOARD.name,
				path: PAGES.ADMIN.DASHBOARD.url,
				element: <Dashboard />,
				isPrivate: true,
				roles: [ROLES.ADMIN],
			},
		],
		[]
	)

	const handleRoles = useCallback((roles = []) => {
		if (!roles || !roles.length) return []
		const clone = [...roles]
		return clone.includes('admin')
	}, [])

	const authRoutes = useMemo(() => routes.filter((val) => val.isAuth), [routes])

	const privateRoutes = useMemo(() => {
		return routes.filter((val) => val.isPrivate && handleRoles(val.roles))
	}, [routes, handleRoles])

	return {
		routes,
		authRoutes,
		privateRoutes,
	}
}

export default useRoute
