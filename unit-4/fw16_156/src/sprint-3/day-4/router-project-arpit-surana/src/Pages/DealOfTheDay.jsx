import React from "react";

function DealOfTheDay() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Deal Of The Day
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab nisi,
              unde minima nesciunt quidem nemo delectus facilis minus sapiente
              sequi quas assumenda rem eos illum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eaque, quod!
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://m.media-amazon.com/images/I/51OYalGc88L._SY741_.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SMARTPHONE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  iQOO 9 SE 5G
                </h2>
                <p className="leading-relaxed text-base">
                  FiQOO 9 SE 5G (Sunset Sierra, 8GB RAM, 128GB Storage) |
                  Qualcomm Snapdragon 888 | 66W Flash Charge
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://m.media-amazon.com/images/I/71MmJNwZcML._SL1500_.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SMARTPHONE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Samsung Galaxy Z Fold3 5G
                </h2>
                <p className="leading-relaxed text-base">
                  Samsung Galaxy Z Fold3 5G (Phantom Black, 12GB RAM, 512GB
                  Storage) with No Cost EMI/Additional Exchange Offers
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://m.media-amazon.com/images/I/71Q3iSQAwAS._SX569_.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SMARTPHONE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Samsung Galaxy M32
                </h2>
                <p className="leading-relaxed text-base">
                  Samsung Galaxy M32 (Black, 6GB RAM, 128GB Storage) 6 Months
                  Free Screen Replacement for Prime
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://m.media-amazon.com/images/I/61mIUCd-37L._SX679_.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SMARTPHONE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  OnePlus 10 Pro 5G
                </h2>
                <p className="leading-relaxed text-base">
                  OnePlus 10 Pro 5G (Volcanic Black, 8GB RAM, 128GB Storage) |
                  Upto 12 Months No Cost EMI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DealOfTheDay;
