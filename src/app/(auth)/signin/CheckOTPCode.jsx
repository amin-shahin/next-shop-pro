import OTPInput from "react-otp-input";

function CheckOTPCode({
  onSubmit,
  otp,
  setOtp,
  isLoadingCheckOtp = false,
  errorCheckOtp,
  dataCheckOtp,
  onBack,
  onResentOtpCode,
  timer,
  responseGetOtp,
}) {
  return (
    <div>
     

      <form onSubmit={onSubmit} className="space-y-10" dir="ltr">
        <p className="w-full text-center">کد تایید را وارد کنید</p>
        <div className="w-full flex justify-center items-center">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span> - </span>}
            containerStyle={"flex gap-x-2 justify-center items-center "}
            inputStyle={{
              width: "2.5rem",
              padding: "0.5rem 0.2rem",
              border: "1px solid rgb(var(--color-primary-300))",
              borderRadius: "0.5rem",
            }}
            renderInput={(props) => <input {...props} />}
          />
        </div>
   
        <button
            className="badge--primary w-full rounded-xl py-2 hover:bg-opacity-90 transition-colors duration-150"
            type="submit"
          >
            {isLoadingCheckOtp ? "Loading..." : "تایید"}
            
          </button>
      </form>

      <div className="mt-5">
        {responseGetOtp && (
          <div className="w-full flex justify-between items-center">
            <p className="text-xs"> {responseGetOtp.message} </p>
            <button onClick={onBack} className="text-primary-800">
              ویرایش{" "}
            </button>
          </div>
        )}
      </div>

      <div className="btns flex w-full justify-between items-center mt-10">
        <button className="text-error" onClick={() => onBack()}>بازگشت</button>
        <div>
          {timer > 0 ? (
            <p>{timer} ثانیه تا ارسال مجدد کد</p>
          ) : (
            <button onClick={onResentOtpCode}>ارسال مجدد کد؟</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckOTPCode;
