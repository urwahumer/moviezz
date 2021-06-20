import React, { useState } from "react";
import Navbar from "./Navbar";
import Loader from "../../Utils/Loader";

const SharedLayout = props => {
  const [isLoading, setIsLoading] = useState(true);
  console.log(props);
  setTimeout(() => {
    setIsLoading(false);
  }, 5000);
  return (
    // <Loader loading={isLoading}>
    <div className="h-100 ">
      <div className="h-100 postion-relative">
        <Navbar />
        {props.children}
      </div>
    </div>
    // </Loader>
  );
};

export default SharedLayout;
