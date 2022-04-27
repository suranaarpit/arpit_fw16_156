import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const NavBar = () => {
  const { auth, isAuth, token, toggleAuth } = useContext(AuthContext);
  return (
    <>
      <nav className="mx-20 px-5 py-5 my-40 bg-gradient-to-r from-indigo-500">
        <ul className="flex">
          <li>
            {auth ? (
              <button
                className="font-bold underline text-lg text-white"
                onClick={toggleAuth}
              >
                LOGOUT
              </button>
            ) : (
              <button
                className="font-bold underline text-lg text-white"
                onClick={isAuth}
              >
                LOGIN
              </button>
            )}
          </li>
        </ul>
      </nav>
      <div className="mx-20 py-5 px-5 border-dashed border-2 border-purple-500 font-bold">
        {auth ? (
          <p>
            <span>
              <i className="bx bx-user font-bold"></i>
            </span>{" "}
            User Logged In Successfully 🎉🎉 and Your Token ID is ➡ {token}
          </p>
        ) : (
          <p>Please Login ⬆⬆</p>
        )}
      </div>
    </>
  );
};
