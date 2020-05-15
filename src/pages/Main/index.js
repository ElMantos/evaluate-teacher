import React from "react";
import { Card } from "../../components";
import "./style.scss";
const data = [1, 2, 3, 1, 1, 1];
function Main() {
  return (
    <div>
      {data.map(item => (
        <div className="mb-4">
          <Card key={item} />
        </div>
      ))}
    </div>
  );
}

export default Main;
