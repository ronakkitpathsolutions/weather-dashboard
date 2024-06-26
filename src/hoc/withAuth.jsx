import React from 'react'
import { isTokenActive } from '../assets/utils/functions'

const WithAuth =
	(RenderComponent, NavigateComponent) =>
	({ to, replace, ...props }) => {
		const token = localStorage.getItem('token')
		return !isTokenActive(token) ? (
			<RenderComponent {...props} />
		) : (
			<NavigateComponent {...{ to, replace }} />
		)
	}

export default WithAuth
