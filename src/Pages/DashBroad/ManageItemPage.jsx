import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../SubSection/SectionTitle';
import useJson from '../../Hooks/useJson';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ManageItemPage = () => {
  const { menuData, refetch } = useJson();
  const axiosSecure = useAxiosSecure();

  const editFood = (id) => {
    console.log(id);
  };

  // Delete method
  const deleteFood = (id) => {
    Swal.fire({
      title: 'Are you sure? Delete this food?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#D1A054',
      cancelButtonColor: '#151515',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // here all delete method applied
        axiosSecure
          .delete(`/menu/${id}`)
          .then((response) => {
            console.log(response);
            if (response.data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your food is Deleted',
                icon: 'success',
              });
            }
            refetch();
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div>
      <SectionTitle heading="Manage All Items" subHeading="--- hurry up ---" />
      <Helmet>
        <title>Bristo admin panal || Manage items</title>
      </Helmet>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* table head */}
            <thead>
              <tr className="text-formTextColor font-poppins text-2xl">
                <th>Number</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* map all the food item || table body */}
              {menuData.map((menu, index) => {
                const { _id, image, price, name, category } = menu;
                return (
                  // table row
                  <tr className="hover py-4" key={_id}>
                    <th className="font-poppins text-xl text-footerBgColorThree font-semibold">
                      {index + 1}
                    </th>
                    <td className="font-poppins text-xl text-footerBgColorThree font-semibold">
                      <img
                        src={image}
                        width={70}
                        className="rounded-lg"
                        alt=""
                      />
                    </td>
                    <td className="font-poppins text-xl text-footerBgColorThree font-semibold">
                      {name}
                    </td>
                    <td className="font-poppins text-xl text-footerBgColorThree font-semibold">
                      $ {price}
                    </td>
                    <td className="font-cinzel font-extrabold text-xl text-formTextColor uppercase hover:text-footerBgColorThree duration-100">
                      {category}
                    </td>
                    <td>
                      {/* Edit button */}
                      <button>
                        <FaEdit
                          onClick={() => editFood(_id)}
                          size={40}
                          className="text-formTextColor hover:text-footerBgColorThree duration-300"
                        />
                      </button>
                    </td>
                    <td>
                      {/* delete button */}
                      <button>
                        <FaTrash
                          onClick={() => deleteFood(_id)}
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
    </div>
  );
};

export default ManageItemPage;
