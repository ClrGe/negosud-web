/** @type {import('../../../../.svelte-kit/types/src/routes').PageLoad} */
import {env} from '$env/dynamic/public';

export async function load({fetch}) {
    let token = `Bearer ` + env.PUBLIC_API_KEY
    let url = env.PUBLIC_API_URL + "/api/bottle"
    let prod = env.PUBLIC_API_URL + "/api/producer"
    try {
        const res = await fetch(url, {
            headers: {
                'Authorization': token
            }
        });
        const bottles = await res.json();

        const resProd = await fetch(prod, {
            headers: {
                'Authorization': token
            }
        });
        const producers = await resProd.json();
        return {bottles, producers};

    } catch (e) {
      return null;
    }
}
