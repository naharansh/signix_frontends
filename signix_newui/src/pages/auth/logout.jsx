import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/user/logout", { withCredentials: true })
      .then((res) => {
        localStorage.clear()
        console.log(res.data);
      
        navigate("/");
      })
      .catch((err) => {
        console.error("Logout error:", err);
      });
  }, [navigate]);

  return null; 
};