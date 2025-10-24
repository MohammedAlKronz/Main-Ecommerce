import React from "react";

const Main = () => {
  return (
    <div className="border-1 pb-3">
      <div className="card text-white mx-2">
        <img src="./assets/main.png.jpg" className="card-img img-fluid" />
        <div className="card-img-overlay d-flex align-items-center">
          <div className="container">
            <h5 className="card-title fs-1 fw-lighter">New Season Arrivals</h5>
            <p className="card-text fs-5 d-none d-sm-block">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
