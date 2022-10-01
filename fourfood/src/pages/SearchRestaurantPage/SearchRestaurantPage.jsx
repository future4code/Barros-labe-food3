import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
const SearchRestaurantPage = () => {
  useProtectedPage();
  return <div>SearchRestaurantPage</div>;
};
export default SearchRestaurantPage;
