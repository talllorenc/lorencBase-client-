import {
  selectCurrentUser,
  selectIsAuthenticated,
  logout,
} from "@/redux/slices/userSlice";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export function LoginButton() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);


  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <>
      {!isAuthenticated ? (
        <Link
          href="/login"
          className="bg-white text-black shadow-button transition-all duration-200 px-2 font-bold hover:bg-[#21232c] hover:text-white "
        >
          LOGIN
        </Link>
      ) : (
        <div>
          <button onClick={handleLogout} className="text-[#480607] font-bold bg-[#FF3333] shadow-buttonRed transition-all duration-200 px-2 hover:bg-[#480607] hover:text-[#FF3333]">LOGOUT</button>
        </div>
      )}
    </>
  );
}
