import React from "react";
import Avatar from "./Avatar";

function Card(props) {
  return (
    // props in action
    <div>
      <div className="card">
        <div className="top">
          <div className="name_details">
            <p className="key">{props.id}.</p>
            <h2 className="name">{props.name}</h2>
          </div>

          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p>
          <p className="view_link">
            <a href="./App.jsx">View More</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
