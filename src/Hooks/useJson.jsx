import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAxiosPublic from './useAxiosPublic';

const useJson = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: menuData = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ['menuData'],
    queryFn: async () => {
      const response = await axiosPublic.get('/menu');
      return response.data;
    },
  });

  const { data: reviews = [] } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const response = await axios('http://localhost:5000/reviews');
      return response.data;
    },
  });

  return { menuData, loading, reviews, refetch };
};

export default useJson;
