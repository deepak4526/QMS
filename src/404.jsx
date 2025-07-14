import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RouteNotFound = () => {
  const authData = useSelector((state) => state.auth_store);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!authData.is_Login) {
      navigate("/admin/login");
    }
  }, [authData.is_Login, navigate]);

  return (
    <div className="flex flex-col justify-center rounded-2xl items-center h-full bg-gray-300 text-white text-center p-4">
      <h1 className="text-6xl font-bold mb-4 text-[#000000] ">Coming Soon</h1>
      <h2 className="text-2xl mb-8 text-[#393939]">
        We're working hard to bring you something amazing!
      </h2>
    </div>
  );
};

export default RouteNotFound;
