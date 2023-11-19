import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../SubSection/SectionTitle';
import useJson from '../../Hooks/useJson';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ManageItemPage = () => {
  const { menuData, refetch } = useJson();
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 10;
  const numberOfPage = Math.ceil(menuData.length / itemsPerPage);
  const pages = [...Array(numberOfPage).keys()];

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsPerPageDisplay = menuData.slice(startIndex, endIndex);

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

  const nextPage = () => {
    if (currentPage < itemsPerPageDisplay.length - 2)
      setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
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
              {itemsPerPageDisplay.map((menu, index) => {
                const { _id, image, price, name, category } = menu;
                const displayIndex = startIndex + index + 1;
                return (
                  // table row
                  <tr className="hover py-4" key={_id}>
                    <th className="font-poppins text-xl text-footerBgColorThree font-semibold">
                      {displayIndex}
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
                      <Link to={`/dashBroad/updateItem/${_id}`}>
                        <button>
                          <FaEdit
                            size={40}
                            className="text-formTextColor hover:text-footerBgColorThree duration-300"
                          />
                        </button>
                      </Link>
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

        <div className="flex justify-center items-center">
          <button
            onClick={nextPage}
            className="border-2 border-footerBgColorThree duration-100 p-4 m-2 rounded-lg hover:bg-footerBgColorThree hover:text-formTextColor"
          >
            Next
          </button>
          {pages.map((item, index) => {
            return (
              <div key={index}>
                <button
                  onClick={() => {
                    setCurrentPage(item);
                  }}
                  className={`${
                    currentPage === item &&
                    'bg-footerBgColorThree text-formTextColor'
                  } border-2 border-footerBgColorThree duration-100 p-4 m-2 rounded-lg`}
                >
                  {index + 1}
                </button>
              </div>
            );
          })}
          <button
            onClick={prevPage}
            className="border-2 border-footerBgColorThree duration-100 p-4 m-2 rounded-lg hover:bg-footerBgColorThree hover:text-formTextColor"
          >
            Prev
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageItemPage;
