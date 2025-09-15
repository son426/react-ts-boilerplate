import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const useAuth = () => {
  /// someLogic to get User
  return { user: "user" };
};

export default function AuthLayout() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      console.log("User is signed out from a protected route. Redirecting...");
      navigate("/sign-in", { replace: true });
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return <Outlet />;
}
