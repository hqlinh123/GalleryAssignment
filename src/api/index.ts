import axios from 'axios';
import Config from 'react-native-config';

// Tạo instance Axios
const axiosClient = axios.create({
  baseURL: Config.API_URL, // Thay URL API của bạn
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    client_id: Config.UNSPLASH_API_KEY, // Thay bằng API Key của bạn
  },
  timeout: 10000, // 10 giây timeout
});

// Interceptor cho request (Thêm token nếu cần)
axiosClient.interceptors.request.use(
  async config => {
    const token = 'your-access-token'; // Lấy token từ Redux hoặc AsyncStorage nếu có
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// Interceptor cho response (Xử lý lỗi chung)
axiosClient.interceptors.response.use(
  response => response.data,
  error => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error.response?.data || error.message);
  },
);

export default axiosClient;
