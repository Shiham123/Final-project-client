import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../SubSection/SectionTitle';
import useJson from '../../Hooks/useJson';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ManageItemPage = () => {
  const { menuData } = useJson();

  return (
    <div>
      <SectionTitle heading="Manage All Items" subHeading="--- hurry up ---" />
      <Helmet>
        <title>Bristo admin panal || Manage items</title>
      </Helmet>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-formTextColor font-poppins text-2xl">
                <th>Number</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menuData.map((menu, index) => {
                const { _id, image, price, name } = menu;
                return (
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
                      {price}
                    </td>
                    <td>
                      <button>
                        <FaEdit
                          size={40}
                          className="text-formTextColor hover:text-footerBgColorThree duration-300"
                        />
                      </button>
                    </td>
                    <td>
                      <button>
                        <FaTrash
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
