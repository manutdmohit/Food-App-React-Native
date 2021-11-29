import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer X0QQ2zPVyRgfTz7WrKcTVyrcYG_zJGnBKfZ50TtO_Glgh1quiQv4OdeP8LZ4jG6m3d8dKpenXnI8ovfLu4D8nDZevmCRe4ISiv_m8M1LQKfB21eeJiRNFvWPalCkYXYx',
  },
});
