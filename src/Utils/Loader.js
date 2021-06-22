import React, { useState, useEffect } from "react";
import logo from "../Assets/Logo/logo.svg";

const Loader = props => {
  // const [loader, setloader] = useState();
  // useEffect(() => {
  //   setloader(props.loading);
  // }, [props.lodaing]);
  console.log(props.loading);
  return (
    <div class={props.loading ? "u-loading" : "d-none"}>
      <div class="u-loading__symbol">
        <img src={logo} />
      </div>
    </div>
  );
};

export default Loader;
