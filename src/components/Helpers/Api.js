import axios from 'axios';
const imageApi = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '30084769-91cedc9ad879b4e4c8b5187f4',
  },
});
export const getGallery = async query => {
  const { data } = await imageApi.get('/', {
    params: {
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: 1,
    },
  });
  return data.hits;
};
