export default function useStorage() {
	const isBrowser = () => typeof window !== 'undefined'
	const storageType = (type: string) =>
		`${type === 'local' ? 'local' : 'session'}Storage`

	const getItem = (key: string, type = 'local') => {
		return isBrowser() ? window[storageType(type)][key] : false
	}

	const setItem = (key: string, value: string, type = 'local') => {
		if (isBrowser()) {
			window[storageType(type)].setItem(key, value)
			return true
		} else {
			return false
		}
	}

	const removeItem = (key: string, type = 'local') => {
		return isBrowser() ? window[storageType(type)].removeItem(key) : ''
	}

	return {
		getItem,
		setItem,
		removeItem
	}
}
