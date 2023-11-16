import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const UserPage = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axiosSecure.get('/users');
      return response.data;
    },
  });

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h1 className="text-3xl font-poppins capitalize text-footerBgColorThree font-semibold border-b-2 border-formTextColor pb-2">
          All user
        </h1>
        <h1 className="text-3xl font-poppins capitalize text-footerBgColorThree font-semibold border-b-2 border-formTextColor pb-2">
          Total user : {users.length}
        </h1>
      </div>
      {/* table based login user data */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((item, index) => {
              const { _id, name, email } = item;
              return (
                <tr key={_id} className="hover">
                  <th>{index + 1}</th>
                  <td>{name}</td>
                  <td>{email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPage;
