import axiosClient from '.';

export const getPhotos = async (params: {page: number; pageSize: number}) => {
  try {
    const response = await axiosClient.post('/photos', {
      params,
    });
    return response; // Dữ liệu đã được xử lý qua interceptor
  } catch (error) {
    return {error}; // Trả về lỗi đã được xử lý
  }
};
