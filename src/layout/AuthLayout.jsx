import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import withAuth from '../hoc/withAuth'
import { PAGES } from '../constant/urls'

const AuthLayout = ({ ...props }) => {
	return (
		<WithAuthLayout {...props} replace {...{ to: PAGES.ADMIN.DASHBOARD.url }} />
	)
}

export default AuthLayout

const WithAuthLayout = withAuth(Outlet, Navigate)
