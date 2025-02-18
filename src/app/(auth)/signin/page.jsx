"use client";
import { useState } from "react";
import SendOTPForm from "./SendOTPForm";

function SignIn() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOTPCode = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full sm:max-w-sm">
        <SendOTPForm
          phoneNumber={phoneNumber}
          onChange={phoneNumberHandler}
          onSubmit={sendOTPCode}
        />
      </div>
    </div>
  );
}

export default SignIn;
