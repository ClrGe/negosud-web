import {writable} from 'svelte/store'

export const cart = writable({})
export const session = writable('')
// save to local storage

export const user = writable({})