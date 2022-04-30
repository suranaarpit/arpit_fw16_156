import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">Tech World</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to={"/"} className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link
              to={"/Smartphone"}
              className="mr-5 hover:text-gray-900 font-bold"
            >
              More Products
            </Link>
            <Link to={"/Blog"} className="mr-5 hover:text-gray-900">
              Blog
            </Link>
            <Link to={"/OurTeam"} className="mr-5 hover:text-gray-900">
              Our Team
            </Link>
            <Link to={"/About"} className="mr-5 hover:text-gray-900">
              About Us
            </Link>
            <Link to={"/Contact"} className="mr-5 hover:text-gray-900">
              Contact Us
            </Link>
            <Link to={"/FAQ"} className="mr-5 hover:text-gray-900">
              FAQ
            </Link>
          </nav>

          {/* Cart */}
          <div className="ml-4 flow-root lg:ml-6 cursor-pointer">
            <ShoppingBagIcon onClick={() => navigate("/Cart")} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
