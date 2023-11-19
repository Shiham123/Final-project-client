import {
  FaBuilding,
  FaCartPlus,
  FaHome,
  FaUserFriends,
  FaWallet,
} from 'react-icons/fa';
import { BsStar } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { FcMenu } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';

const UserPanelLayout = () => {
  return (
    <>
      <div className="w-64 min-h-screen bg-formTextColor">
        <Helmet>
          <title>Bistro || User panel</title>
        </Helmet>
        <div className="px-8 my-12">
          <h1 className="font-cinzel font-[900] text-[23px] text-footerBgColorThree">
            BISTRO BOSS
          </h1>
          <h2 className="font-cinzel text-[17px] font-bold text-footerBgColorThree tracking-[7px]">
            Restaurant
          </h2>
        </div>
        <ul className="px-8">
          <li>
            <NavLink
              to="/dashBroad/userHome"
              className={({ isActive }) =>
                isActive ? 'text-white' : 'text-footerBgColorThree'
              }
            >
              <div className="flex justify-start items-center gap-4 py-4">
                <FaHome size={40} />
                <p className="font-cinzel font-semibold text-[16px] uppercase">
                  User Home
                </p>
              </div>
            </NavLink>
          </li>
          {/* second li */}
          <li>
            <NavLink
              to="/dashBroad/reservation"
              className={({ isActive }) =>
                isActive ? 'text-white' : 'text-footerBgColorThree'
              }
            >
              <div className="flex justify-start items-center gap-4 py-4">
                <FaBuilding size={40} />
                <p className="font-cinzel font-semibold text-[16px] uppercase">
                  reservation
                </p>
              </div>
            </NavLink>
          </li>
          {/* third li */}
          <li>
            <NavLink
              to="/dashBroad/payment"
              className={({ isActive }) =>
                isActive ? 'text-white' : 'text-footerBgColorThree'
              }
            >
              <div className="flex justify-start items-center gap-4 py-4">
                <FaWallet size={40} />
                <p className="font-cinzel font-semibold text-[16px] uppercase">
                  payment history
                </p>
              </div>
            </NavLink>
          </li>
          {/* fourth li */}
          <li>
            <NavLink
              to="/dashBroad/userCart"
              className={({ isActive }) =>
                isActive ? 'text-white' : 'text-footerBgColorThree'
              }
            >
              <div className="flex justify-start items-center gap-4 py-4">
                <FaCartPlus size={40} />
                <p className="font-cinzel font-semibold text-[16px] uppercase">
                  my cart
                </p>
              </div>
            </NavLink>
          </li>
          {/* Fifth li */}
          <li>
            <NavLink
              to="/dashBroad/review"
              className={({ isActive }) =>
                isActive ? 'text-white' : 'text-footerBgColorThree'
              }
            >
              <div className="flex justify-start items-center gap-4 py-4">
                <BsStar size={40} />
                <p className="font-cinzel font-semibold text-[16px] uppercase">
                  add review
                </p>
              </div>
            </NavLink>
          </li>
          {/* Sixth li */}

          <li className="pb-12">
            <NavLink
              to="/dashBroad/userBooking"
              className={({ isActive }) =>
                isActive ? 'text-white' : 'text-footerBgColorThree'
              }
            >
              <div className="flex justify-start items-center gap-4 py-4">
                <FaUserFriends size={40} />
                <p className="font-cinzel font-semibold text-[16px] uppercase">
                  my booking
                </p>
              </div>
            </NavLink>
          </li>

          <li className="border-t-[2px] pt-12 border-footerBgColorThree">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-white' : 'text-footerBgColorThree'
              }
            >
              <div className="flex justify-start items-center gap-4 py-4">
                <FaHome size={40} />
                <p className="font-cinzel font-semibold text-[16px] uppercase">
                  Home
                </p>
              </div>
            </NavLink>
          </li>

          {/* menu */}
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? 'text-white' : 'text-footerBgColorThree'
              }
            >
              <div className="flex justify-start items-center gap-4 py-4">
                <FcMenu size={40} />
                <p className="font-cinzel font-semibold text-[16px] uppercase">
                  Menu
                </p>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserPanelLayout;
