import { useRef, useState } from "react";
import "./In.css"

type InputType = {
  totalInputs: number;
  onChange: (otp: string) => void;
};

const OtpInput = ({ totalInputs, onChange }: InputType) => {
  const [otp, setOtp] = useState<string>("");
  let inputRef = useRef<HTMLInputElement[]>([]);

  return (
    <div className="otpcon">
      {new Array(totalInputs).fill(1).map((_, index) => (
        <input
          onChange={(e) => {
            setOtp(otp + e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.code === "Backspace") {
              if (index > 0) {
                inputRef.current[index - 1].focus();
                inputRef.current[index - 1].select();
              }
            } else {
              if (index < totalInputs - 1) {
                inputRef.current[index + 1].focus();
              }
            }
            onChange(otp);
          }}
          ref={(element) => {
            if (inputRef.current && element) {
              inputRef.current[index] = element;
            }
          }}
          type="text"
          maxLength={1}
          key={index}
          className="OtpInp"
        />
      ))}
    </div>
  );
};

export default OtpInput;
