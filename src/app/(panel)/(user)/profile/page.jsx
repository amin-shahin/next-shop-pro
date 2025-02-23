"use client";
import { useGetUserData } from "@/hooks/useAuth";
import toLocalStringDate from "@/utils/toLocalStringDate";

function ProfileUserPage() {
  const { data, error, isLoading } = useGetUserData();
  const { user } = data || {};
  if (isLoading) return <p>loading...</p>;
  return (
    <div className="space-y-3">
      <h1 className="text-lg">{user.name} عزیز خوش آمدید</h1>
      <p>تاریخ پیوستن : {toLocalStringDate(user.createdAt)}</p>
    </div>
  );
}

export default ProfileUserPage;
