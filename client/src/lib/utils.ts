export function on(obj: any, type: string, ...args: any): any {
	obj.addEventListener(...args)
}

export function off(obj: any, type: string, ...args: any): any {
	obj.removeEventListener(...args)
}
