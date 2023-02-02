/** @type {import('../../../../.svelte-kit/types/src/routes').PageLoad} */
import { env } from '$env/dynamic/public';
export async function load({ fetch }) {
    let token = `Bearer ` + env.PUBLIC_API_KEY
    let url = env.PUBLIC_API_URL + "/api/bottle"

    const res = await fetch(url, {
        headers : {
            'Authorization': token
        }
    });
    const bottles = await res.json() ;
    console.log(bottles)
    return { bottles };
}

