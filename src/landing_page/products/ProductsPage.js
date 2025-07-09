import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="/media/kite.png"
        ProductName="Kite"
        ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        LearnMore=""
        GooglePlay=""
        AppStore=""
      />

      <RightSection
        imageURL="/media/console.png"
        ProductName="Console"
        ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.

         Learn more "
        tryDemo=""
        LearnMore=""
      />

      <LeftSection
        imageURL="/media/coin.png"
        ProductName="Coin"
        ProductDescription="ket data, The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.s, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        LearnMore=""
        GooglePlay=""
        AppStore=""
      />
      <RightSection 
        imageURL="/media/kiteconnect.png"
        ProductName="Kite Connect API"
        ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo=""
        LearnMore=""
        GooglePlay=""
        AppStore=""


      />
      <LeftSection
        imageURL="/media/Varsity.png"
        ProductName="Varsity mobile"
        ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go. dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.s, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        LearnMore=""
        GooglePlay=""
        AppStore=""
      />
    <p className="text-center">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>


      <Universe />

      
    </>
  );
}

export default ProductPage;
