import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaTrash, FaUserFriends } from 'react-icons/fa';

const UserPage = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axiosSecure.get('/users');
      return response.data;
    },
  });

  const deleteUser = (id) => {
    console.log(id);
  };

  const addRole = (id) => {
    console.log(id);
  };

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
            <tr className="text-formTextColor font-poppins text-2xl">
              <th>Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((item, index) => {
              const { _id, name, email } = item;
              return (
                <tr key={_id} className="hover py-4">
                  <th className="font-poppins text-xl text-footerBgColorThree font-semibold">
                    {index + 1}
                  </th>
                  <td className="font-poppins text-xl text-footerBgColorThree font-semibold">
                    {name}
                  </td>
                  <td className="font-poppins text-xl text-footerBgColorThree font-semibold">
                    {email}
                  </td>
                  <td>
                    <button>
                      <FaUserFriends
                        onClick={() => addRole(_id)}
                        size={40}
                        className="text-formTextColor hover:text-footerBgColorThree duration-300"
                      />
                    </button>
                  </td>
                  <td>
                    <button>
                      <FaTrash
                        onClick={() => deleteUser(_id)}
                        size={40}
                        className="text-formTextColor hover:text-footerBgColorThree duration-300"
                      />
                    </button>
                  </td>
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
