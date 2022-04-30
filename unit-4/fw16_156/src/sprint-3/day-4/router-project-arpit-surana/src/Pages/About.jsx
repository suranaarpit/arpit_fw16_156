import React from "react";
import AnnounceBar from "../Components/AnnounceBar";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function About() {
  return (
    <>
      <AnnounceBar />
      <NavBar />
      <hr />
      <div className="flex flex-col py-24 text-center w-full">
        <h1 className="text-2xl font-medium title-font mb-8 text-gray-900">
          ABOUT US
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
          nostrum. Fuga ad corporis iure, corrupti autem iusto tempore
          dignissimos porro sequi, sunt excepturi magni reprehenderit
          consequuntur sit cumque quo repellat. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Amet harum quam fuga cupiditate earum
          illo debitis maiores modi, placeat expedita.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          deserunt et nesciunt eum, consequatur quos saepe ipsum molestiae
          consectetur aliquam necessitatibus, exercitationem velit dicta,
          quaerat provident eos nostrum. Et a reprehenderit sed repellat. Magni
          similique dicta, commodi error eos nulla fugiat sed? A hic illum ab
          similique necessitatibus magni tenetur.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          esse id alias reiciendis quasi? Ipsam ex minus ducimus nemo tempore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          corporis expedita qui officia nemo accusamus? Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Fugit cupiditate iste voluptatem
          et iure inventore.
        </p>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default About;
