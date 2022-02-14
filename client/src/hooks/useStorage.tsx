const useStorage = () => {
	const isBrowser = (): boolean => typeof window !== 'undefined'
	const storageType = (type: string): any =>
		`${type === 'local' ? 'local' : 'session'}Storage`

	const getItem = (key: number, type: string = 'local') => {
		return isBrowser() ? window[storageType(type)][key] : false
	}

	const setItem = (key: number, value: string, type: string = 'local') => {
		if (isBrowser()) {
			storageType(type).setItem(key, value)
			return true
		} else {
			return false
		}
	}

	const removeItem = (key: string, type = 'local') => {
		return isBrowser() ? storageType(type).removeItem(key) : ''
	}

	return {
		getItem,
		setItem,
		removeItem
	}
}
export default useStorage
