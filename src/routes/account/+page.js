/** @type {import('../../../../.svelte-kit/types/src/routes').PageLoad} */
import {env} from '$env/dynamic/public';

export async function load({fetch}) {
    let token = `Bearer ` + env.PUBLIC_API_KEY
    let url = env.PUBLIC_API_URL + "/api/customerorder"
    try {
        const res = await fetch(url, {
            headers: {
                'Authorization': token
            }
        });
        const orders = await res.json();


        return { orders };

    } catch (e) {
        return null;
    }
}
