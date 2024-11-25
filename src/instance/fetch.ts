export class Fetch {
    baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    #generateQueryParams = () => {
        const params = {
            api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY!,
            language: 'ko-KR'
        }
        const queryString = new URLSearchParams(params).toString();

        return queryString ? `?${queryString}` : '';
    }

    async get(url: string, options?: RequestInit) {
        const response = await fetch(`${this.baseUrl}${url}${this.#generateQueryParams()}`, {
            ...options,
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
            },
        });
        return response.json();
    }

    async put(url: string, data: object, options?: RequestInit) {
        const response = await fetch(`${this.baseUrl}${url}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            ...options
        });
        return response.json();
    }

    async post(url: string, data: object, options?: RequestInit) {
        const response = await fetch(`${this.baseUrl}${url}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            ...options
        });
        return response.json();
    }

    async delete(url: string) {
        const response = await fetch(`${this.baseUrl}${url}`, {
            method: 'DELETE',
        });
        return response.json();
    }
}