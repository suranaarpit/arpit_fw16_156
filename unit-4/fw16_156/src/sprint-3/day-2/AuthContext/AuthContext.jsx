import React, { createContext, useState } from "react";

// https://reqres.in/api/login

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [auth, setAuth] = useState(false);

  const isAuth = async () => {
    try {
      let res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        }),
      });
      let data = await res.json();
      console.log(data.token);
      setToken(data.token);
      setAuth(true);
    } catch (err) {
      console.log("err:", err);
    }
  };

  const toggleAuth = () => {
    setAuth(!auth);
    setToken(null);
  };
  const value = { token, auth, isAuth, toggleAuth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
