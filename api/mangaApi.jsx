import { endpoints } from '../constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Fetch a list of mangas
const fetchMangas = async () => {
    try {
        //Get url 
        const url = endpoints.API_ENDPOINT_MANGA();
        let response;

        //Use url as a key for the cache
        const cachedData = await AsyncStorage.getItem(url);
        if (cachedData) {
            response = JSON.parse(cachedData);
            console.log("Loaded data from cache.");
        } else {
            response = await axios.get(url);
            await AsyncStorage.setItem(url, JSON.stringify(response));
            console.log("Fetched and cached data from API.");
        }

        return response.data;
    } catch (error) {
        console.error('Error fetching mangas:', error);
        throw error;
    }
};

// Fetch details of a specific manga by ID
const fetchMangaById = async (id) => {
    try {
        //Get url 
        const url = endpoints.API_ENDPOINT_MANGA_BY_ID({ id });
        let response;

        //Use url as a key for the cache
        const cachedData = await AsyncStorage.getItem(url);
        if (cachedData) {
            response = JSON.parse(cachedData);
            console.log("Loaded data from cache.");
        } else {
            response = await axios.get(url);
            await AsyncStorage.setItem(url, JSON.stringify(response));
            console.log("Fetched and cached data from API.");
        }

        return response.data;
    } catch (error) {
        console.error(`Error fetching manga with ID ${id}:`, error);
        throw error;
    }
};

// Fetch aggregate data for a specific manga by ID
const fetchMangaAggregate = async (id) => {
    try {
        const response = await axios.get(endpoints.API_ENDPOINT_AGGREGATE({ id }));
        return response.data;
    } catch (error) {
        console.error(`Error fetching manga aggregate ${id}:`, error);
        throw error;
    }
};

export {
    fetchMangas,
    fetchMangaById,
    fetchMangaAggregate
};