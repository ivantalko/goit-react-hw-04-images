import axios from 'axios';
const imageApi = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '30084769-91cedc9ad879b4e4c8b5187f4',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: 1,
  },
});
export const getGallery = async params => {
  const { data } = await imageApi.get();
  return data;
};
