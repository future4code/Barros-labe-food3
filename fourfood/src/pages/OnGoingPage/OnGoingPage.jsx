import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
const OnGoingPage = () => {
  useProtectedPage();
  return <div>OnGoingPage</div>;
};
export default OnGoingPage;
