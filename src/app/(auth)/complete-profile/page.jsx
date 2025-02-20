"use client";
import { useState } from "react";
import TextField from "@/ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfileApi } from "@/services/authServices";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


function CompleteProfile() {
  const { data, error, mutateAsync, isPending } = useMutation({
    mutationFn: completeProfileApi,
  });
  const router = useRouter()
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const {message,user} = await mutateAsync({ name, email });
      toast.success(message)
      router.push('/')
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="w-full flex justify-center">
      <div className="w-full sm:max-w-sm">
        <form onSubmit={onSubmit} className="space-y-10">
          <TextField
            label={"نام و نام خانوادگی"}
            name={"name"}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            label={"ایمیل"}
            name={"email"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button
            className=" badge--primary w-full rounded-xl py-2 hover:bg-opacity-90 transition-colors duration-150"
            type="submit"
          >
            {isPending ? "Loading..." : "ثبت"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfile;
