import loginStyle from './register.module.scss';
import loginImg from '../../assets/others/authentication1.png';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <div className={`${loginStyle.login} p-24`}>
        <div className="flex flex-row justify-center items-center rounded-lg shadow-lg">
          <div className="w-2/4 p-[10rem]">
            <img src={loginImg} alt="" />
          </div>
          <div className="p-[5rem]">
            <form className="flex flex-col flex-shrink-0 gap-12">
              <label
                htmlFor=""
                className="text-[20px] font-semibold font-inter text-[#444]"
              >
                Email :{' '}
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="p-4 rounded-lg outline-none border-none font-inter text-[20px] w-full"
                required
              />

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
                required
              />

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
