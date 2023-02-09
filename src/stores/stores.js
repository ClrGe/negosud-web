import {writable} from 'svelte/store'

export const cart = writable({})
export const allProducts = writable({})
// export const filterProducts = derived(
//     [allProducts, isRed, searchProduct],
//     ([$allProducts, $isRed, $searchProduct]) => {
//         return $allProducts
//     }
// )({})
export const searchProduct = writable('')

export const isRed = writable(true)
