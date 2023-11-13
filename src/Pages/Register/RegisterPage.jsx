import loginStyle from './register.module.scss';
import loginImg from '../../assets/others/authentication1.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext, useRef } from 'react';
import { AppContext } from '../../Context/context';

import swal from 'sweetalert';

const RegisterPage = () => {
  const formRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUserEmailPassword, profileUpdate, logOut } =
    useContext(AppContext);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password, name, url } = data;
    createUserEmailPassword(email, password)
      .then((result) => {
        console.log(result);

        profileUpdate(name, url)
          .then((result) => {
            console.log(result);
            formRef.current.reset();
            logOut()
              .then((result) => {
                console.log(result);
                swal('Good job!', 'You clicked the button!', 'success');
                navigate('/login');
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })

      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className={`${loginStyle.login} p-24`}>
        <div className="flex flex-row-reverse justify-center items-center rounded-lg shadow-lg">
          <div className="w-2/4 p-[10rem]">
            <img src={loginImg} alt="" />
          </div>
          <div className="p-[5rem]">
            <form
              className="flex flex-col flex-shrink-0 gap-4"
              onSubmit={handleSubmit(onSubmit)}
              ref={formRef}
            >
              {/* name */}
              <label
                htmlFor=""
                className="text-[20px] font-semibold font-inter text-[#444]"
              >
                Name :
              </label>
              <input
                type="text"
                name="name"
                placeholder="type here"
                className="p-4 rounded-lg outline-none border-none font-inter text-[20px] w-full"
                {...register('name', { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}

              {/* email */}
              <label
                htmlFor=""
                className="text-[20px] font-semibold font-inter text-[#444]"
              >
                Email :
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="p-4 rounded-lg outline-none border-none font-inter text-[20px] w-full"
                required
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}

              {/* photo url */}

              <label
                htmlFor=""
                className="text-[20px] font-semibold font-inter text-[#444]"
              >
                Photo url :{' '}
              </label>
              <input
                type="url"
                name="url"
                className="p-4 rounded-lg outline-none border-none font-inter text-[20px]"
                placeholder="type here"
                {...register('url', { required: true })}
              />
              {errors.url && (
                <span className="text-red-600">Photo url is required</span>
              )}

              {/* password */}

              <label
                htmlFor=""
                className="text-[20px] font-semibold font-inter text-[#444]"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="p-4 rounded-lg outline-none border-none font-inter text-[20px]"
                placeholder="Enter your password"
                {...register('password', {
                  required: true,
                  maxLength: 20,
                  minLength: 7,
                  // pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
              />
              {errors.password?.type === 'required' && (
                <span className="text-red-600">Password url is required</span>
              )}

              {errors.password?.type === 'maxLength' && (
                <span className="text-red-600">Max length 20</span>
              )}

              {errors.password?.type === 'minLength' && (
                <span className="text-red-600">Min length 7</span>
              )}

              {/* {errors.password?.type === 'pattern' && (
                <span>
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </span>
              )} */}

              <button
                type="submit"
                className="bg-[#d1a054b3] p-4 w-full my-8 rounded-lg text-white font-bold font-inter"
              >
                Sign In
              </button>
            </form>
            <p className="font-inter text-formTextColor text-[20px]">
              New here?{' '}
              <Link to={'/login'} className="cursor-pointer">
                <span>Already have an account</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
