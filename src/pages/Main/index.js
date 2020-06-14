import React, { useState } from "react";
import { FirebaseDatabaseNode } from "@react-firebase/database";

import { Card, Modal, Loader } from "../../components";
import "./style.scss";

function Main() {
  const [selected, setSelected] = useState();
  const [index, setIndex] = useState();
  return (
    <div>
      {selected && (
        <Modal
          item={selected}
          index={index}
          onClose={() => {
            setSelected(null);
            setIndex();
          }}
        />
      )}

      <FirebaseDatabaseNode path="teachers">
        {data => {
          console.log(data);
          if (!data.value) {
            return <Loader />;
          }
          console.log(data);
          return data.value.map((item, index) => (
            <div key={`${item}_${index}`} className="mb-4">
              <Card
                onClick={() => {
                  setSelected(item);
                  setIndex(index);
                }}
                comments={
                  item.comments
                    ? Object.keys(item.comments).map(k => item.comments[k])
                    : null
                }
                description={item.description}
                email={item.email}
                img={item.img}
                name={item.name}
                key={item}
              />
            </div>
          ));
        }}
      </FirebaseDatabaseNode>
    </div>
  );
}

export default Main;
