import React, { useState } from "react";
import { FirebaseDatabaseMutation } from "@react-firebase/database";
import "./style.scss";

const STARS = [1, 2, 3, 4, 5];

function Error() {
  return <p className="error">Laukelis yra privalomas</p>;
}

function ModalContent({ runMutation, item, onClose }) {
  const [dirtyInputs, setDirtyInputs] = useState({
    name: false,
    stars: false,
    comment: false
  });

  const [comment, setComment] = useState({
    name: "",
    stars: 0,
    comment: ""
  });

  return (
    <div className="content text-center">
      <div className="row">
        <div className="col-12 text-center">
          <h4>{item.name}</h4>
        </div>
        <div className="col-6 offset-3">
          Jūsų vardas
          <input
            value={comment.name}
            onChange={e => {
              setComment({
                ...comment,
                name: e.target.value
              });
              setDirtyInputs({
                ...dirtyInputs,
                name: true
              });
            }}
            className="form-control"
          />
          {!comment.name && dirtyInputs.name ? <Error /> : null}
        </div>
        <div className="col-6 offset-3">
          Vertinimas
          <select
            onChange={e => {
              setComment({
                ...comment,
                stars: Number(e.target.value)
              });
              setDirtyInputs({
                ...dirtyInputs,
                stars: true
              });
            }}
            className="form-control"
          >
            <option value="">Pasirinkite įvertinimą</option>

            {STARS.map(s => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {!comment.stars && dirtyInputs.stars ? <Error /> : null}
        </div>
        <div className="col-6 offset-3">
          Komentaras
          <textarea
            value={comment.comment}
            onChange={e => {
              setComment({
                ...comment,
                comment: e.target.value
              });
              setDirtyInputs({
                ...dirtyInputs,
                comment: true
              });
            }}
            className="form-control"
          />
          {!comment.comment && dirtyInputs.comment ? <Error /> : null}
        </div>
        <div className="row col-6 offset-3 mt-4">
          <button onClick={onClose} className="btn btn-danger">
            Uždaryti
          </button>

          <button
            onClick={async () => {
              let error = false;
              setDirtyInputs({
                name: true,
                stars: true,
                comment: true
              });
              Object.keys(comment).forEach(k => {
                if (!comment[k]) {
                  error = true;
                }
              });

              if (error) {
                return null;
              }
              const dateObj = new Date();
              const month = dateObj.getUTCMonth() + 1; //months from 1-12
              const day = dateObj.getUTCDate();
              const year = dateObj.getUTCFullYear();
              await runMutation({
                ...comment,
                date: `${year}-${month.length > 1 ? month : `0${month}`}-${
                  day.length > 1 ? day : `0${day}`
                }`
              });
              onClose();
            }}
            className="btn btn-success ml-auto"
          >
            Išsaugoti
          </button>
        </div>
      </div>
    </div>
  );
}

function Modal({ item, onClose, index }) {
  return (
    <div className="modal-c">
      <FirebaseDatabaseMutation path={`teachers/${index}/comments`} type="push">
        {({ runMutation }) => {
          return (
            <ModalContent
              runMutation={runMutation}
              onClose={onClose}
              item={item}
            />
          );
        }}
      </FirebaseDatabaseMutation>
    </div>
  );
}
export default Modal;
