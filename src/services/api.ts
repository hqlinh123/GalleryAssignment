// src/api/GalleryAPI.ts
import axios from 'axios';
import Config from 'react-native-config';

const ACCESS_KEY = Config.UNSPLASH_API_KEY; // Access key for Unsplash API
const BASE_URL = Config.API_URL; // Unsplash API base URL
const DEAFULT_PAGE_SIZE = 10
interface Photo {
  id: string;
  urls: { full: string; regular: string; small: string };
  user: {
    name: string;
    username: string;
    profile_image: { small: string; medium: string; large: string }; // Optional: include profile image info
  };
}

const GalleryAPI = {
  // Fetch a list of photos from Unsplash using axios
  fetchListPhotos: async (page: number = 1): Promise<Photo[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/photos`, {
        params: {
          client_id: ACCESS_KEY,
          per_page: DEAFULT_PAGE_SIZE,
          page,
        },
      });
      return response.data; // Return the fetched image data
    } catch (error: any) {
      console.error('Error fetching list of photos:', error?.response?.data || error);
      throw new Error(error?.response?.data?.message || 'Failed to fetch photos');
    }
  },

  // Search for photos based on a query using axios
  searchPhotos: async (query: string, page: number = 1): Promise<Photo[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/search/photos`, {
        params: {
          client_id: ACCESS_KEY,
          query,
          per_page: DEAFULT_PAGE_SIZE,
          page,
        },
      });
      return response.data?.results || []; // Return the search results or an empty array if no results
    } catch (error: any) {
      console.error('Error searching photos:', error?.response?.data || error);
      throw new Error(error?.response?.data?.message || 'Failed to search photos');
    }
  },
};

export default GalleryAPI;
