export default async function requester(method, url, data) {
    const options = {
        credentials: 'include',
    };

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options.headers = {
            'Content-Type': 'application/json',
        };
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
        if (response.status === 401) {
            throw new Error("Unauthorized! Please log in.");
        }
        const error = await response.json();
        throw new Error(error.error || 'Request failed');
    }

    if (method === 'GET' || url.includes('login')) {
    
        return await response.json();
    }

    return null;
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');
