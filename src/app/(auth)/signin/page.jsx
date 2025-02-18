"use client";
import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import http from "@/services/httpServices";
import toast from "react-hot-toast";

function SignIn() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOTPCode = async (e) => {
    e.preventDefault();

    try {
      const res = await http.post("/user/get-otp", { phoneNumber });
      const {data } = res;
      console.log(data);
      toast.success(data.data.message)
    } catch (error) {
    toast.error( error?.response?.data?.message)
    }
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
