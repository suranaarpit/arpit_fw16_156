import { useRef } from "react";
import "./otp.css";

type OtpInputType = {
  totalInputs: number;
};

export const OtpInput = ({ totalInputs }: OtpInputType) => {
  const inputRef = useRef<HTMLInputElement[]>([]); //{ current: [] }
  console.log("inputRef:", inputRef);
  return (
    <div className="otpcon">
      <h1>OTP INPUT</h1>
      {new Array(totalInputs).fill(1).map((_, index) => (
        <input
          onKeyUp={(e) => {
            console.log(e.code);
            if (e.code === "Backspace") {
              inputRef.current[index - 1].focus();
              inputRef.current[index - 1].select();
            } else {
              inputRef.current[index + 1].focus();
            }
          }}
          ref={(element) => {
            console.log("element:", element);
            if (inputRef.current && element) {
              inputRef.current[index] = element;
            }
          }}
          type={"text"}
          maxLength={1}
          key={index}
          className="OtpInp border border-black"
        />
      ))}
    </div>
  );
};
