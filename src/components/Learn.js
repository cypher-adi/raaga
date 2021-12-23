import React from "react";
import PageTitle from "./PageTitle";

const Learn = () => {
  return (
    <div>
      <PageTitle />
      <h1 style={{ fontWeight: "900" }}>Learn with Us</h1>

      <div className="learnMain">
        <div>
          <h2>Management</h2>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur, numquam.{" "}
          </p>
        </div>
        <div>
          <h2>Press</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur, numquam.{" "}
          </p>
        </div>
        <div>
          <h2>Booking</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur, numquam.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learn;
