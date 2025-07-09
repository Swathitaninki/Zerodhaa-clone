import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
       <div className="p-3" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Ticket</a>
      </div>
      <div className="row p-3 mx-5">
        <div className="col-6 p-3">
            <h3 className="fs-3 d-flex flex-column gap-2">
                Search for an answer or browse help topics to create a ticket</h3>       
           <input placeholder="eg. how do i active F&Q" />
           <br />
           <a href="">Track account opening</a>
           <br />
           <a href="" >Track segment activation</a>
           <a href="">Intraday margins</a>
           <a href="">Kite user manual</a>

           
        </div>
        <div className="col-6 p-5 ">
            <h3>Feature</h3>
            <ol>
            <li><a href="">Current tackover and delisting</a></li>
           <li><a href="">Latest Intrady - MIS and CO</a></li>
           </ol>
        </div>
        </div>
    </section>
  );
}

export default Hero;
