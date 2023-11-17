import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../SubSection/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useRef } from 'react';

const imgHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;
const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const formRef = useRef();

  const onSubmit = async (data) => {
    const imgFile = { image: data.image[0] };
    const response = axiosPublic
      .post(imgHostingApi, imgFile, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data.data.display_url);
      })
      .catch((error) => console.log(error));
    formRef.current.reset();
  };
  return (
    <div>
      <SectionTitle heading="Add Item" subHeading="---what's new!---" />
      <Helmet>
        <title>Bistro project || Add Item</title>
      </Helmet>

      <div className="bg-gray-200 p-4 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text text-[#444] font-inter text-2xl">
                Recipe Name*
              </span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register('name', { required: true })}
              required
              className="w-full text-[#444] font-inter text-2xl p-4 rounded-lg outline-none border-none"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-8">
              <label className="label">
                <span className="text-[#444] font-inter text-2xl">
                  Category*
                </span>
              </label>
              <select
                defaultValue="default"
                {...register('category', { required: true })}
                className="w-full text-[#444] font-inter text-2xl p-4 rounded-lg outline-none border-none"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full">
              <label className="label">
                <span className="text-[#444] font-inter text-2xl p-4 rounded-lg">
                  Price*
                </span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register('price', { required: true })}
                className="w-full text-[#444] font-inter text-2xl p-4 rounded-lg outline-none border-none"
              />
            </div>
          </div>
          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="text-[#444] font-inter text-2xl rounded-lg">
                Recipe Details
              </span>
            </label>
            <textarea
              {...register('recipe')}
              className="w-full text-[#444] font-inter text-2xl p-4 rounded-lg outline-none border-none"
              placeholder="Bio"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register('image', { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="bg-formTextColor text-footerBgColorThree p-6 flex items-center font-inter text-3xl rounded-lg">
            Add Item <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
