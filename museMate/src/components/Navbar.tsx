// Import the useNavigate hook from react-router-dom
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';



type NavbarProps = {
  isTopOfPage: boolean;
  
};

const Navbar = ({ isTopOfPage }: NavbarProps) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";



  return (
    <nav >
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 bg-yellow-500`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            {/* Use NavLink for navigation */}
            <NavLink to="/" className="text-2xl font-bold text-white">
              Logo
            </NavLink>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {/* Use NavLink for navigation */}
                  <NavLink
                    to="/"
                    // activeClassName="text-secondary-500"
                    className="text-white"
                    // onClick={() => setSelectedPage(SELECTEDPAGE.HOME)}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/benefits"
                    // activeClassName="text-secondary-500"
                    className="text-white"
                    // onClick={() => setSelectedPage(SELECTEDPAGE.BENEFITS)}
                  >
                    Benefits
                  </NavLink>
                  <NavLink
                    to="/studio"
                    // activeClassName="text-secondary-500"
                    className="text-white"
                    // onClick={() => setSelectedPage(SELECTEDPAGE.STUDIO)}
                  >
                    Studio
                  </NavLink>
                  <NavLink
                    to="/contact"
                    // activeClassName="text-secondary-500"
                    className="text-white"
                    // onClick={() => setSelectedPage(SELECTEDPAGE.CONTACT)}
                  >
                    Contact
                  </NavLink>
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  Become a Member
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            {/* Use NavLink for navigation */}
            <NavLink
              to="/"
              // activeClassName="text-secondary-500"
              className="text-white"
              onClick={() => {
                // setSelectedPage(SELECTEDPAGE.HOME);
                setIsMenuToggled(false);
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/benefits"
              // activeClassName="text-secondary-500"
              className="text-white"
              onClick={() => {
                // setSelectedPage(SELECTEDPAGE.BENEFITS);
                setIsMenuToggled(false);
              }}
            >
              Benefits
            </NavLink>
            <NavLink
              to="/studio"
              // activeClassName="text-secondary-500"
              className="text-white"
              onClick={() => {
                // setSelectedPage(SELECTEDPAGE.STUDIO);
                setIsMenuToggled(false);
              }}
            >
              Studio
            </NavLink>
            <NavLink
              to="/contact"
              // activeClassName="text-secondary-500"
              className="text-white"
              onClick={() => {
                // setSelectedPage(SELECTEDPAGE.CONTACT);
                setIsMenuToggled(false);
              }}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
