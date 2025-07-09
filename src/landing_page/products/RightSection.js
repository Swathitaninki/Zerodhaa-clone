import React from "react";

function RightSection({
  imageURL,
  ProductName,
  ProductDescription,
  tryDemo,
  LearnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6 p-5 mt-5">
          <h1>{ProductName}</h1>

          <p>{ProductDescription}</p>

          <div>
            <a href={LearnMore} >
              Learn More
            </a>
          </div>
        </div>

        <div className="col-6 ">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
