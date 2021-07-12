import Axios from 'axios'


export const API_URL = "https://app.bazdidan.com/api/v1/";
const TOKEN = "token";
const REFRESH_TOKEN = "refreshToken";
const myAxios = Axios.create({
    baseURL: API_URL
  });

const refreshToken = () => {
  return Axios.post<{token: string}>(`${API_URL}auth/refreshToken`, {refreshToken: localStorage.getItem(REFRESH_TOKEN)});
};

myAxios.interceptors.request.use(
    async config => {
    let token:any = localStorage.getItem(TOKEN);    
      localStorage.setItem(TOKEN, token);
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    error => {
      Promise.reject(error)
  });

  myAxios.interceptors.response.use((response) => {
    return response
  }, async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = (await refreshToken()).data.token;
      localStorage.setItem(TOKEN, access_token);          
      myAxios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      return myAxios.request(originalRequest);
    }
    return Promise.reject(error);
  });

export default myAxios