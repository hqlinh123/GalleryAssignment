import axiosClient from '.';

export const getPhotos = async (params: { page: number; per_page: number }) => {
    try {
        const response = await axiosClient.get('/photos', { params });
        return {
            response,
            error: null,
        }; // Dữ liệu đã được xử lý qua interceptor
    } catch (error) {
        return { response: null, error }; // Trả về lỗi đã được xử lý
    }
};
