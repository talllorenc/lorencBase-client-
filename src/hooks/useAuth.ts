import { useSelector } from "react-redux";
import { selectCurrentToken } from "@/redux/slices/auth/authSlice";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  UserInfo: { name: string; role: string };
}

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isUser = false;
  let isAdmin = false;

  if (token) {
    const decoded: JwtPayload = jwtDecode(token);
    const { role } = decoded.UserInfo;

    isUser = role.includes("user");
    isAdmin = role.includes("admin");

    return { role, isUser, isAdmin };
  }

  return { name: "", role: [], isUser, isAdmin };
};

export default useAuth;
