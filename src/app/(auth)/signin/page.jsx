"use client";
import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import http from "@/services/httpServices";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { checkOtpCode, getOtpCode } from "@/services/authServices";
import CheckOTPCode from "./CheckOTPCode";
import { useRouter } from "next/navigation";

function SignIn() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const RESEND_CODE_TIMER = 90;
  const [time, setTime] = useState(RESEND_CODE_TIMER);
  useEffect(() => {
    const timer = setInterval(() => {
      time > 0 && setTime((time) => time - 1);
    }, 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const router = useRouter();

  const renderStepSignIn = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            phoneNumber={phoneNumber}
            onChange={phoneNumberHandler}
            onSubmit={sendOTPCodeHandler}
            isLoading={isPending}
          />
        );

      case 2:
        return (
          <CheckOTPCode
            onSubmit={checkOTPCodeHandler}
            otp={otp}
            setOtp={setOtp}
            isLoadingCheckOtp={isLoadingCheckOtp}
            onBack={() => setStep((step) => step - 1)}
            timer={time}
            onResentOtpCode={sendOTPCodeHandler}
            responseGetOtp={responseGetOtp}
          />
        );

      default:
        return null;
    }
  };

  const {
    data: responseGetOtp,
    isPending,
    mutateAsync,
    error,
  } = useMutation({
    mutationFn: getOtpCode,
  });

  const {
    data,
    isPending: isLoadingCheckOtp,
    mutateAsync: mutateCheckOtpCode,
    error: errorCheckOtp,
  } = useMutation({
    mutationFn: checkOtpCode,
  });

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOTPCodeHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await mutateAsync(phoneNumber);
      toast.success(data.message);
      setStep(2);
      setOtp("");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const checkOTPCodeHandler = async (e) => {
    e.preventDefault();

    try {
      const { message, user } = await mutateCheckOtpCode({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        router.push("/");
      } else {
        router.push("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full sm:max-w-sm">{renderStepSignIn()}</div>
    </div>
  );
}

export default SignIn;
