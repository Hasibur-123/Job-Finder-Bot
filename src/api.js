import axios from 'axios';

const API_KEY = 'https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch'; 
const BASE_URL = 'https://jsearch.p.rapidapi.com';

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
});

export const fetchJobs = async (query) => {
    try {
        const response = await apiClient.get('/search', {
            params: { query, num_pages: 1 }
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return [];
    }
};
