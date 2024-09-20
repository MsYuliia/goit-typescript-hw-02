import React from "react";
import {ColorRing} from "react-loader-spinner";

export const Loader: React.FC = () => {
  return (
    <ColorRing
      visible={true}
      width="80"
      height="80"
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      wrapperClass="colorRing"
      wrapperStyle={{}}
      ariaLabel="color-ring-loading"
    />
  );
};
