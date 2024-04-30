import { useLogoutMutation } from "@/redux/slices/auth/authApiSlice";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const [logout] = useLogoutMutation();

  return (
    <button
      className="bg-[#FF3333] font-bold px-4 py-1 transition-all duration-200 cursor-pointer shadow-buttonRed hover:shadow-buttonRedBrick"
      onClick={() => {
        logout({});
        window.location.href = "/";
      }}
    >
      LogoutButton
    </button>
  );
};

export default LogoutButton;
