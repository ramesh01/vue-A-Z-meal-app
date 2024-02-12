import axios from 'axios';
const httpClient = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/',
  });

  // www.themealdb.com/api/json/v1/1/search.php?f=a
export default httpClient;