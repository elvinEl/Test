import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useLogoutMutation } from "../../../redux/api/auth";
function Logout() {
  const [logout, { isLoading, isError }] = useLogoutMutation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await logout();
      console.log(response.data.status);
      if (response.data.status === true) {
        Object.keys(Cookies.get()).forEach((cookieName) => {
          Cookies.remove(cookieName);
          navigate("/signin");
        });
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <button onClick={handleLogout} className="bg-lime-500">
        Logout
      </button>
    </div>
  );
}

export default Logout;
