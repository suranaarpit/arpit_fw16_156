import React from "react";
import AnnounceBar from "../Components/AnnounceBar";
import NavBar from "../Components/NavBar";
import CustomizedAccordions from "../Components/FAQAcc.tsx";
import Footer from "../Components/Footer";

function FAQ() {
  return (
    <>
      <AnnounceBar />
      <NavBar />
      <hr />
      <section>
      <div className="flex flex-col text-center w-full my-10">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
             FAQ's
            </h1>
          </div>
        <CustomizedAccordions/>
      </section>
      <Footer />
    </>
  );
}

export default FAQ;
