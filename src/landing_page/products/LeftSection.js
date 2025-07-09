import React from "react";

function LeftSection({
  imageURL,
  ProductName,
  ProductDescription,
  tryDemo,
  LearnMore,
  GooglePlay,
  AppStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6 ">
          <img src={imageURL} />
        </div>
        
        <div className="col-6 p-5 mt-5">
          <h1>{ProductName}</h1>

          <p>{ProductDescription}</p>

          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={LearnMore} Style={{marginLeft:"50px"}}>Learn More</a>
          </div>

          <div className="mt-3">
            <a href={GooglePlay}>
              <img src="/media/googlePlayBadge.svg" />
            </a>
            <a href={AppStore}>
              <img src="\media\appstoreBadge.svg" 
              Style={{marginLeft:"50px"}}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
