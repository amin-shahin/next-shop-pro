"use client";
import { useGetUserData } from "@/hooks/useAuth";
import { userUpdateProfileApi } from "@/services/authServices";
import Loading from "@/ui/Loading";
import TextField from "@/ui/TextField";
import { filterSomeKeysOfObject } from "@/utils/objectUtils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function MeInformationPage() {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useGetUserData();
  const { user } = data || {};
  const {
    data: updateUserData,
    error: errorUpdateUserData,
    isLoading: isLoadingUpdate,
    mutateAsync,
  } = useMutation({
    mutationFn: userUpdateProfileApi,
  });

  const includeKey = ["name", "email", "phoneNumber", "biography"];
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (user) {
      setFormData(filterSomeKeysOfObject(user, includeKey));
    }
  }, [user]);

  const submitUpdatingUserDataHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync(formData);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  if (isLoading) return <Loading />;
  return (
    <div className="max-w-sm">
      <h1 className="text-xl font-bold mb-5">اطلاعات کاربری</h1>
      <form className="space-y-5" onSubmit={submitUpdatingUserDataHandler}>
        {Object.keys(filterSomeKeysOfObject(user, includeKey)).map((key) => (
          <TextField
            label={key}
            name={key}
            key={key}
            value={formData[key] || ""}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        ))}
        <button
          className="badge--primary w-full rounded-xl py-2 hover:bg-opacity-90 transition-colors duration-150"
          type="submit"
        >
          {isLoadingUpdate ? <Loading /> : "تایید"}
        </button>
      </form>
    </div>
  );
}

export default MeInformationPage;
