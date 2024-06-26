import React from 'react'
import { Outlet } from 'react-router-dom'

const PlaneLayout = ({ ...props }) => {
	return <Outlet {...props} />
}

export default PlaneLayout
