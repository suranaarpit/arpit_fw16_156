import { useState } from "react";
import OtpInput from "./OTP-INPUTS/OtpInput";

const S2DayOne = () => {
  const [OTP, setOtp] = useState("");
  const handleChange = (otp: string) => {
    setOtp(otp);
  };

  if (!OTP) {
    return (
      <div className=" mt-[100px]">
        <h1 className=" w-fit m-auto uppercase font-bold  text-[orange]">
          OTP ➡ <span className="underline text-[green]">Enter OTP</span>
        </h1>
        <OtpInput totalInputs={5} onChange={handleChange} />
      </div>
    );
  } else {
    return (
      <div className=" mt-[100px]">
        <h1 className=" w-fit m-auto uppercase font-bold  text-[orange]">
          OTP ➡ <span className="underline text-[green]">{OTP}</span>
        </h1>
        <OtpInput totalInputs={5} onChange={handleChange} />
      </div>
    );
  }
};

export default S2DayOne;
