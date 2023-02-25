import {writable} from 'svelte/store'

export const cart = writable({})
export const session = writable('')
export const user = writable({})