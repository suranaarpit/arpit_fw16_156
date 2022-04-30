import React from "react";

function AnnounceBar() {
  return (
    <div>
      {" "}
      <header className="relative bg-white">
        <p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
          <span>
            <i
              className="bx bxs-megaphone text-sm mr-3"
              style={{ color: "#f8f8f8" }}
            ></i>
          </span>{" "}
          Get free delivery on orders over ₹1500
        </p>
      </header>
    </div>
  );
}

export default AnnounceBar;
