import { useContext } from 'react';
import { AppContext } from '../../Context/context';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaBook, FaDollarSign, FaProductHunt, FaUser } from 'react-icons/fa';

const DashBroadPage = () => {
  const { user } = useContext(AppContext);
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const response = await axiosSecure.get('/admin-stats');
      return response.data;
    },
  });
  const { users, revenue, orders, menuItems } = stats;

  return (
    <div>
      <div>{user?.displayName ? user?.displayName : 'Back'}</div>
      <div className="flex justify-around items-center gap-8 my-12">
        <h1 className="bg-transparent border-2 border-formTextColor px-20 py-8 font-cinzel text-4xl font-semibold text-footerBgColorThree rounded-lg hover:bg-formTextColor hover:text-white duration-200 hover:scale-110">
          <div className="flex gap-4">
            <FaUser />
            <span>{users}</span>
          </div>
        </h1>
        <h1 className="bg-transparent border-2 border-formTextColor px-20 py-8 font-cinzel text-4xl font-semibold text-footerBgColorThree rounded-lg hover:bg-formTextColor hover:text-white duration-200 hover:scale-110">
          <div className="flex gap-4">
            <FaDollarSign />
            <span>{revenue}</span>
          </div>
        </h1>
        <h1 className="bg-transparent border-2 border-formTextColor px-20 py-8 font-cinzel text-4xl font-semibold text-footerBgColorThree rounded-lg hover:bg-formTextColor hover:text-white duration-200 hover:scale-110">
          <div className="flex gap-4">
            <FaBook />
            <span>{menuItems}</span>
          </div>
        </h1>
        <h1 className="bg-transparent border-2 border-formTextColor px-20 py-8 font-cinzel text-4xl font-semibold text-footerBgColorThree rounded-lg hover:bg-formTextColor hover:text-white duration-200 hover:scale-110">
          <div className="flex gap-4">
            <FaProductHunt />
            <span>{orders}</span>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default DashBroadPage;
