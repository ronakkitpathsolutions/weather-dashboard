import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const useHistory = () => {
	const navigate = useNavigate()

	const handleNavigate = useCallback(
		(path = '') => {
			return navigate(path)
		},
		[navigate]
	)

	return handleNavigate
}

export default useHistory
