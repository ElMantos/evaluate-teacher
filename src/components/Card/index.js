import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { getAverageRating } from "../../utils";
import "./style.scss";

function Comment({ name, comment, date }) {
  return (
    <div className="row comment">
      <div className="text-center col-sm-3">
        <strong className="d-block">{name}</strong>
        <small>{date}</small>
      </div>
      <div className="col-sm-9">{comment}</div>
    </div>
  );
}

const RATINGS = [1, 2, 3, 4, 5];

function Card({ name, img, description, email, onClick, comments }) {
  const average = getAverageRating(comments || []);
  return (
    <div className="row mb-5 p-2 profile-card">
      <div className="col-sm-4 text-center profile-card-left">
        <img className="img-fluid" src={img} alt="Card cap" />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Pareigos: {description}</p>
          <p className="card-text">El. paštas: {email}</p>

          <div className="d-flex mb-4">
            {RATINGS.map(r => {
              return (
                <FontAwesomeIcon
                  size="lg"
                  key={r}
                  color={r <= average ? "gold" : "gray"}
                  icon={faStar}
                />
              );
            })}
          </div>
        </div>
        <button type="button" onClick={onClick} className="btn btn-primary">
          Įvertinti
        </button>
      </div>
      <div className="col-sm-8">
        <div className="comments p-2">
          {comments && comments.length
            ? comments.map(({ name, date, comment }) => {
                return <Comment name={name} date={date} comment={comment} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Card;
