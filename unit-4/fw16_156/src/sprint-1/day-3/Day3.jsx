import React from "react";
import RestauentDetails from "./ResDetails/ResDetails";
import Card from "./PayCard/Card_one";

const Day3 = () => {
  const data = {
    date: "28/10/2022",
    logo: "https://3.bp.blogspot.com/-WiRcMnvbSYA/XFmKhavuiAI/AAAAAAAAHqo/w6iRalrC2XoCzCra3HF8NAWijme0nFjPQCK4BGAYYCw/s1600/Amazon%2BLogo.png",
    btn: "Case Study",
    heading: "Amazon Gift Pay",
    subheading: "Desktop - Mobile",
  };
  const data1 = {
    date: "28/10/2022",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48KOs7yz_Evd0AaqorAMK9usmJXjxicQCY_GSqTSNTePBpIC6Zb9uGEdEyv3gg5FXHck&usqp=CAU",
    btn: "Case Study",
    heading: "Apple Gift Payment",
    subheading: "MacOS - Mobile",
  };
  return (
    <>
      {/* <RestauentDetails></RestauentDetails> */}
      <Card color={"#ff9900"} data={data} />
      <Card color={"#FFFFFF"} data={data1} />
    </>
  );
};
export default Day3;
