import { FcImageFile, FcMenu } from 'react-icons/fc';

import carIcon from '../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../Context/context';

const NavbarSection = () => {
  const { user, logOut } = useContext(AppContext);

  const userName = user?.displayName;

  const logoutUser = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar fixed bg-navbarBgColorOne text-fontColorOne z-10 px-[2rem] py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0}>
            <div className="hidden md:inline-block lg:inline-block">
              <h1>BISTRO BOSS</h1>
              <h2>Restaurant</h2>
            </div>
            <FcMenu
              size={40}
              className="cursor-pointer inline-block md:hidden lg:hidden"
            />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <div className="flex flex-col gap-4">
              <h1 className="font-inter text-[20px] text-black uppercase font-bold cursor-pointer">
                <NavLink
                  to={`/`}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'isPending'
                      : isActive
                      ? 'text-activeFontColor'
                      : ''
                  }
                >
                  Home
                </NavLink>
              </h1>
              <h1 className="font-inter text-[20px] text-black uppercase font-bold">
                CONTACT us
              </h1>
              <h1 className="font-inter text-[20px] text-black uppercase font-bold">
                DASHBOARD
              </h1>
              <h1 className="font-inter text-[20px] text-black uppercase font-bold cursor-pointer">
                <NavLink
                  to={`/menu`}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'pending'
                      : isActive
                      ? 'text-activeFontColor'
                      : ''
                  }
                >
                  Our Menu
                </NavLink>
              </h1>
              <h1 className="font-inter text-[20px] text-black uppercase font-bold">
                <NavLink
                  to={'order'}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'isPending'
                      : isActive
                      ? 'text-activeFontColor'
                      : ''
                  }
                >
                  Our Shop
                </NavLink>
              </h1>
              <img src={carIcon} width={40} alt="" />
              <div className="flex justify-center items-center gap-4">
                <p className="font-inter text-[20px] uppercase font-bold">
                  <NavLink
                    to={'/login'}
                    className={({ isActive, isPending }) =>
                      isPending ? 'isPending' : isActive ? 'isActive' : ''
                    }
                  >
                    Login/Register
                  </NavLink>
                </p>
                <FcImageFile />
              </div>
            </div>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <div className="hidden md:hidden lg:inline-block">
          <div className="flex gap-4">
            <h1 className="font-inter text-[20px] uppercase font-bold">
              <NavLink
                to={'/'}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'isPending'
                    : isActive
                    ? 'text-activeFontColor'
                    : ''
                }
              >
                Home
              </NavLink>
            </h1>
            <h1 className="font-inter text-[20px] uppercase font-bold">
              CONTACT us
            </h1>
            <h1 className="font-inter text-[20px] uppercase font-bold">
              DASHBOARD
            </h1>
            <h1 className="font-inter text-[20px] uppercase font-bold cursor-pointer">
              <NavLink
                to={`/menu`}
                className={({ isActive, isPending }) =>
                  isPending ? '' : isActive ? 'text-activeFontColor' : ''
                }
              >
                Our Menu
              </NavLink>
            </h1>
            <h1 className="font-inter text-[20px] uppercase font-bold">
              <NavLink
                to={'order'}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'isPending'
                    : isActive
                    ? 'text-activeFontColor'
                    : ''
                }
              >
                Our Shop
              </NavLink>
            </h1>
            <img src={carIcon} width={40} alt="" />
            <div className="flex justify-center items-center gap-4">
              {user ? (
                <div>
                  <p
                    onClick={logoutUser}
                    className="font-inter text-[20px] uppercase font-bold cursor-pointer"
                  >
                    Logout
                  </p>
                  <p>{userName}</p>
                </div>
              ) : (
                <p className="font-inter text-[20px] uppercase font-bold">
                  <NavLink
                    to={'/login'}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? 'isPending'
                        : isActive
                        ? 'text-activeFontColor'
                        : ''
                    }
                  >
                    Login/Register
                  </NavLink>
                </p>
              )}
              <FcImageFile />
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="dropdown dropdown-left">
            <label tabIndex={2}>
              <FcMenu
                size={40}
                className="cursor-pointer hidden md:inline-block lg:hidden"
              />
            </label>
            <ul
              tabIndex={2}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="flex flex-col gap-4">
                <h1 className="font-inter text-[20px] text-black uppercase font-bold">
                  Home
                </h1>
                <h1 className="font-inter text-[20px] text-black uppercase font-bold">
                  CONTACT us
                </h1>
                <h1 className="font-inter text-[20px] text-black uppercase font-bold">
                  DASHBOARD
                </h1>
                <h1 className="font-inter text-[20px] text-black uppercase font-bold">
                  <NavLink
                    to={'order'}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? 'isPending'
                        : isActive
                        ? 'text-activeFontColor'
                        : ''
                    }
                  >
                    Our Order
                  </NavLink>
                </h1>
                <h1 className="font-inter text-[20px] text-black uppercase font-bold">
                  <NavLink
                    to={`/menu`}
                    className={({ isActive, isPending }) =>
                      isPending ? '' : isActive ? 'text-activeFontColor' : ''
                    }
                  >
                    Our Shop
                  </NavLink>
                </h1>
                <img src={carIcon} width={40} alt="" />
                <div className="flex justify-center items-center gap-4">
                  <p className="font-inter text-[20px] uppercase font-bold">
                    <NavLink
                      to={'/login'}
                      className={({ isActive, isPending }) =>
                        isPending ? 'isPending' : isActive ? 'isActive' : ''
                      }
                    >
                      Login/Register
                    </NavLink>
                  </p>
                  <FcImageFile />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSection;
