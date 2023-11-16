import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaTrash, FaUserFriends } from 'react-icons/fa';
import Swal from 'sweetalert2';

const UserPage = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axiosSecure.get('/users');
      return response.data;
    },
  });

  const addRole = (item) => {
    const { _id, name } = item;
    Swal.fire({
      title: `Are you sure ${name} make admin`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#D1A054',
      cancelButtonColor: '#151515',
      confirmButtonText: 'Yes, Change',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Changed',
          text: `You changed ${name} state`,
          icon: 'success',
        });

        axiosSecure
          .patch(`/users/admin/${_id}`)
          .then((response) => {
            console.log(response);
            refetch();
          })
          .catch((error) => console.log(error));
      }
    });
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: 'Are you sure? Delete this user?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#D1A054',
      cancelButtonColor: '#151515',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your user has been deleted.',
          icon: 'success',
        });

        axiosSecure
          .delete(`/users/${id}`)
          .then((response) => {
            console.log(response);
            refetch();
          })
          .catch((error) => console.log(error));
      }
    });
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
              const { _id, name, email, role } = item;
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
                    {role === 'admin' ? (
                      <p className="font-poppins text-xl text-formTextColor font-semibold">
                        Admin
                      </p>
                    ) : (
                      <button>
                        <FaUserFriends
                          onClick={() => addRole(item)}
                          size={40}
                          className="text-formTextColor hover:text-footerBgColorThree duration-300"
                        />
                      </button>
                    )}
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
