import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AppContext } from '../Context/context';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
  const { user } = useContext(AppContext);
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin = [] } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async () => {
      const response = await axiosSecure.get(`/users/admin/${user.email}`);
      return response.data?.isAdmin;
    },
  });
  return [isAdmin];
};

export default useAdmin;
