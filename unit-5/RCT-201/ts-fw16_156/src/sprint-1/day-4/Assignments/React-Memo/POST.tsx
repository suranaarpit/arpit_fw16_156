import React from "react";
import { post } from "./IN";

type postProps = {
  color: string;
  handleToggle: (s: string) => void;
};

const Post = (props: post & postProps) => {
  // console.log("Render post comp...");
  return (
    <div className="w-[fit-content] h-[fit-content] m-auto mt-9 border-2 py-2 px-2 border-black">
      {props.verify && (
        <img
          src="https://thumbs.dreamstime.com/b/vector-illustration-verified-rubber-stamp-simple-isolated-white-background-verified-stamp-seal-158487634.jpg"
          alt="verified"
          className="h-[50px] w-[50px] ml-[310px]"
        />
      )}
      <div className="flex">
        <div
          className="h-[50px] w-[50px]"
          style={{ backgroundColor: `#${props.color}` }}
        ></div>
        <div className="ml-8">
          <h2>{props.title}</h2>
          <p>{props.body}</p>
        </div>
      </div>
      <button
        onClick={() => props.handleToggle(props.id)}
        className="border-2 border-black px-4 mt-8"
      >
        Verify
      </button>
    </div>
  );
};
export default React.memo(Post);
