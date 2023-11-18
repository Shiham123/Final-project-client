import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../SubSection/SectionTitle';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const UpdateItemSection = () => {
  const { menuData } = useLoaderData();
  const { name, price, category, recipe, image } = menuData;

  const { register, handleSubmit } = useForm();
  const formRef = useRef();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <SectionTitle heading="update item" subHeading="---Refresh info---" />
      <Helmet>
        <title>Bistro project || Update Item</title>
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
              defaultValue={name}
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
                defaultValue={category}
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
                defaultValue={price}
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
              defaultValue={recipe}
              {...register('recipe')}
              className="w-full text-[#444] font-inter text-2xl p-4 rounded-lg outline-none border-none"
              placeholder="Bio"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              defaultValue={image}
              {...register('image', { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="bg-formTextColor my-4 text-footerBgColorThree p-6 flex items-center font-inter text-3xl rounded-lg m-auto text-center">
            Update menu Item
            <FaUtensils className="ml-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItemSection;
