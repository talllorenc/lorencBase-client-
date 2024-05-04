import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/redux/slices/auth/authSlice";

const isAuth = () => {
  const user = useSelector(selectCurrentUser);

  if (!user) {
    return { isUser: false, isAdmin: false };
  }

  const isUser = user.role.includes("user");
  const isAdmin = user.role.includes("admin");

  return { isUser, isAdmin };
};

export default isAuth;
