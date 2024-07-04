import { useMemo } from 'react'
import { ICONS } from '../../assets'

const useNavigation = () => {
	const navItems = useMemo(
		() => [
			{
				id: 'home',
				icon: ICONS.Home,
				label: 'Dashboard',
			},
			{
				id: 'map',
				icon: ICONS.Globe,
				label: 'Map',
			},
			{
				id: 'saved_locations',
				icon: ICONS.Stack,
				label: 'Locations',
			},
			{
				id: 'calender',
				icon: ICONS.Calendar,
				label: 'Calendar',
			},
			{
				id: 'settings',
				icon: ICONS.Gear,
				label: 'Settings',
				isSeparated: true,
			},
			{
				id: 'sign_out',
				icon: ICONS.Exit,
				label: 'Sign Out',
				isSeparated: true,
			},
		],
		[]
	)

	const settingTabItems = useMemo(
		() => navItems.filter((val) => val.isSeparated),
		[navItems]
	)

	const tabItems = useMemo(
		() => navItems.filter((val) => !val.isSeparated),
		[navItems]
	)

	return {
		navItems: tabItems,
		settingTabItems,
	}
}

export default useNavigation
