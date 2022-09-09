import React from "react";

function Card(props) {
  return (
    // props in action
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img src={props.src} alt="avatar_img" className="circle-img" />
        </div>
        <div className="bottom">
          <p className="info">{props.tel}</p>
          <p className="info">{props.email}</p>
          <p className="view_link">
            <a href="">View More >></a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
