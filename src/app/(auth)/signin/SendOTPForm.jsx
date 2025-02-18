"use client";
import TextField from "@/ui/TextField";
// import { useForm } from "react-hook-form";

function SendOTPForm({ phoneNumber, onChange, onSubmit }) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} className="space-y-10">
        
          <TextField
            name={"phoneNumber"}
            label={"لطفا شماره تماس خود را وارد نمایید"}
            onChange={onChange}
            value={phoneNumber}
          />
          <button
            className="badge--primary w-full rounded-xl py-2 hover:bg-opacity-90 transition-colors duration-150"
            type="submit"
          >
            تایید
          </button>
     
      </form>
    </div>
  );
}

export default SendOTPForm;
