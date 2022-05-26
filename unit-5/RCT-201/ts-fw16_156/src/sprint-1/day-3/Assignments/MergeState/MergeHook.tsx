import React from "react";
import useMergeState from "../Hooks/useMergeState";

export type User = {
  name: string;
  email: string;
  password: string;
};

const MergeHook = () => {
  const initState = {
    name: "",
    email: "",
    password: "",
  };
  const { state, setState } = useMergeState(initState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(state);
  };
  return (
    <div className="m-auto">
      <div className="mt-5 mb-4 m-auto w-fit font-bold underline">useMergeState Hook</div>
      <div className="w-[50%] m-auto">
        <form onSubmit={handleSubmit} className="mt-10">
          <div className="flex w-full items-center">
            <div className="w-full mr-4">
              <label className="font-semibold">Username</label>
              <br />
              <input
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border outline-none text-3xl px-2 py-2"
                type="text"
                name="name"
                value={state.name}
                placeholder="Enter username"
                onChange={handleChange}
              />
            </div>

            <div className="w-full">
              <label className="font-semibold">Email Address</label>
              <br />
              <input
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border outline-none text-3xl px-2 py-2"
                type="email"
                name="email"
                value={state.email}
                placeholder="Enter email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <label className="font-semibold">Password</label>
            <br />
            <input
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border outline-none text-3xl px-2 py-2"
              type="password"
              name="password"
              value={state.password}
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>
          <br />
          <input
            className="border border-indigo-700 mt-1 w-full  rounded-md py-2 cursor-pointer px-8 flex items-center justify-center text-base font-medium"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <section className="text-center border border-gray-200 w-[455px] m-auto mt-6">
        <div>
          {state.name && <p>Username: {state.name}</p>}
          {state.email && <p>Email Address: {state.email}</p>}
          {state.password && <p>Password: {state.password}</p>}
        </div>
      </section>
    </div>
  );
};

export default MergeHook;
