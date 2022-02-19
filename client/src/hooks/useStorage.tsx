// const useStorage = () => {
export const isBrowser = (): boolean => typeof window !== 'undefined'
const storageType = (type: string): any =>
	`${type === 'local' ? 'local' : 'session'}Storage`

export const getItem = (key: any, type: string = 'local') => {
	return isBrowser() ? window[storageType(type)][key] : false
}

export const setItem = (key: any, value: string, type: string = 'local') => {
	if (isBrowser()) {
		storageType(type).setItem(key, value)
		return true
	} else {
		return false
	}
}

export const removeItem = (key: string, type = 'local') => {
	return isBrowser() ? storageType(type).removeItem(key) : ''
}

// return {
// 	getItem,
// 	setItem,
// 	removeItem
// }
// }
// export default useStorage
