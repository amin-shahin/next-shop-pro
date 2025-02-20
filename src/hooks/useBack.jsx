import { useRouter } from "next/navigation";

function useBack() {
  const router = useRouter();

  return () => router.back(-1);
}

export default useBack;
