/** @type {import('../../../.svelte-kit/types/src/routes').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch('http://localhost:4000/api/bottle', {
        headers : {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNAYy5jIiwibmJmIjoxNjc1MjAzMzE2LCJleHAiOjE2NzUyMDY5MTYsImlhdCI6MTY3NTIwMzMxNiwiaXNzIjoiTmVnb1NVZEFQSSJ9.7Q2h4-8399tFgVyAd4Bo5M2Onit4_L2qO3dKcNcnexY`
        }
    });
    const bottles = await res.json() ;
    console.log(bottles)
    return { bottles };
}

