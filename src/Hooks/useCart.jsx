import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AppContext } from '../Context/context';

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AppContext);
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cartItem', user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/carts?email=${user?.email}`);
      return response.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
