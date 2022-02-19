import Cookies from 'js-cookie'
import axios from 'axios'

export const isBrowser = (): boolean => typeof window !== 'undefined'

// set in cookie
export const setCookie = (key: string, value: string) => {
	if (isBrowser()) {
		Cookies.set(key, value, {
			expires: 1
		})
	}
}
// remove from cookie
export const removeCookie = (key: string) => {
	if (isBrowser()) {
		Cookies.remove(key, {
			expires: 1
		})
	}
}
// get from cookie such as stored token
// will be useful when we need to make request to server with token
export const getCookie = (key: string) => {
	if (isBrowser()) {
		return Cookies.get(key)
	}
}
// set in localstorage
export const setLocalStorage = (key: any, value: any) => {
	if (isBrowser()) {
		localStorage.setItem(key, JSON.stringify(value))
	}
}
// remove from localstorage
export const removeLocalStorage = (key: any) => {
	if (isBrowser()) {
		localStorage.removeItem(key)
	}
}
// authenticate user by passing data to cookie and localstorage during signin
export const authenticate = (response: any, next: any) => {
	console.log('AUTHENTICATE HELPER ON SIGNIN RESPONSE', response)
	setCookie('token', response.data.token)
	setLocalStorage('user', response.data.user)
	next()
}
// access user info from localstorage
export const isAuth = () => {
	const user =
		localStorage.getItem('user') !== null
			? JSON.parse(localStorage.getItem('user') || '{}') && true
			: false
	return user
}

type RegisterType = {
	name: string
	email: string
	password: string
	phoneNumber: string
}

export const signup = async (options: RegisterType) => {
	return await axios.post(`authentication/register`, options)
}

type LoginType = {
	email: string
	password: string
}

export const login = async (credentials: LoginType) => {
	return await axios.post(`authentication/login`, credentials)
}

export const authUser = async () => {
	return await axios.get(`authentication/user`)
}

export const logout = () => {
	removeLocalStorage('user')
	axios.post(`authentication/logout`)
}

export const updateUser = (response: any, next: any) => {
	console.log('UPDATE USER IN LOCALSTORAGE HELPERS', response)
	if (typeof isBrowser()) {
		let auth = JSON.parse(localStorage.getItem('user') || '{}')
		auth = response.data
		localStorage.setItem('user', JSON.stringify(auth))
	}
	next()
}
