import loginStyle from './login.module.scss';
import loginImg from '../../assets/others/authentication1.png';

import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineGoogle,
} from 'react-icons/ai';

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const submitInfo = { email, password };
    console.log(submitInfo);
  };
  return (
    <div className={`${loginStyle.login} p-24`}>
      <div className="flex flex-row justify-center items-center rounded-lg shadow-lg">
        <div className="w-2/4 p-[10rem]">
          <img src={loginImg} alt="" />
        </div>
        <div className="p-[5rem]">
          <form
            className="flex flex-col flex-shrink-0 gap-12"
            onSubmit={handleSubmit}
          >
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

            <input
              type="text"
              className="p-4 rounded-lg outline-none border-none font-inter text-[20px]"
              placeholder="captcha"
            />

            <input
              type="text"
              className="p-4 rounded-lg outline-none border-none font-inter text-[20px]"
              placeholder="type here"
            />
            <button
              type="submit"
              className="bg-[#d1a054b3] p-4 w-full my-8 rounded-lg text-white font-bold font-inter"
            >
              Sign In
            </button>
          </form>
          <p className="font-inter text-formTextColor text-[20px]">
            New here? <span>Create a New Account</span>
          </p>
          <p className="font-inter text-[#444] text-[20px] w-full text-center py-4">
            Or sign in with
          </p>
          <div className="flex w-full justify-center gap-[3rem]">
            <AiOutlineGoogle
              size={50}
              className="border-2 border-black rounded-full p-2 cursor-pointer"
            />
            <AiOutlineFacebook
              size={50}
              className="border-2 border-black rounded-full p-2 cursor-pointer"
            />
            <AiOutlineGithub
              size={50}
              className="border-2 border-black rounded-full p-2 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
