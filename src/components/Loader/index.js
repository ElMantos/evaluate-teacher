import React from "react";

import "./style.scss";

function Loader() {
  return (
    <div className="lds-backdrop">
      <div className="lds-hourglass"></div>
    </div>
  );
}

export default Loader;
