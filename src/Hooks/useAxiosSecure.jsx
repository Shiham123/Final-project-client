import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/context';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AppContext);

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access-token');
      config.headers.authorization = `bearer ${token}`;
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const status = error.response.status;
      if (status === 401 || status === 402 || status === 403) {
        navigate('/login');
        logOut()
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
