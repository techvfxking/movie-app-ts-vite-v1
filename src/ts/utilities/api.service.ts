import type { TApiResponse } from "../types/api.type";

const API_KEY: string = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL: string = `${import.meta.env.VITE_BASE_URL}/?apikey=${API_KEY}`;

if (!API_KEY) {
    console.warn('⚠️ VITE_OMDB_API_KEY is not set in .env file');
}

export const SearchMovies = async (searchQuery: string, page: number = 1): Promise<TApiResponse> => {
    if (!searchQuery.trim()) {
        throw new Error('Search query cannot be empty');
    }

    if (!API_KEY) {
        throw new Error('API key is not configured. Please set VITE_OMDB_API_KEY in .env file');
    }

    if (page < 1 || page > 100) {
        throw new Error('Page number must be between 1 and 100');
    }

    try {
        const url = `${BASE_URL}&s=${encodeURIComponent(searchQuery)}&page=${page}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data: TApiResponse = await response.json();

        if (data.Response === 'False') {
            throw new Error(data.Error || 'No results found');
        }

        if (!data.Search || !Array.isArray(data.Search)) {
            throw new Error(data.Error || "There are no movies");
        }

        return data;

    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Failed to fetch movies. Please try again.');
    }
}