import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

function Comment() {
  return (
    <div class="row comment">
      <div className="text-center col-sm-3">
        <strong className="d-block">Vardenis pavardenis</strong>
        <small>2020-05-05 12:12:12</small>
      </div>
      <div className="col-sm-9">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="row mb-5 p-2 profile-card">
      <div className="col-sm-4 text-center profile-card-left">
        <img
          className="img-fluid"
          src="https://i2.wp.com/eif.viko.lt/media/uploads/sites/5/2018/04/m-gzegozevskis.jpg?resize=150%2C150&ssl=1"
          alt="Card cap"
        />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title">Marius Pšegovičz</h5>
          <p className="card-text">Pareigos: lektorius</p>
          <div className="d-flex mb-4">
            <FontAwesomeIcon size="lg" color="gold" icon={faStar} />
            <FontAwesomeIcon size="lg" color="gold" icon={faStar} />
            <FontAwesomeIcon size="lg" color="gold" icon={faStar} />
            <FontAwesomeIcon size="lg" color="gold" icon={faStar} />
            <FontAwesomeIcon size="lg" color="grey" icon={faStar} />
          </div>
        </div>
        <button type="button" className="btn btn-primary">
          Go somewhere
        </button>
      </div>
      <div class="col-sm-8">
        <div class="comments p-2">
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
}

export default Card;
