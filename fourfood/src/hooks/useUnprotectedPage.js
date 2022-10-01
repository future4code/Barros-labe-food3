import { useLayoutEffect, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToSearchRestaurantPage } from "../routes/coordinator";
const useUnprotectedPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token !== null) {
      navigate('/home')
    }
  }, [])
};
export default useUnprotectedPage;