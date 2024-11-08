import React from "react";
import Buy_Tickets from "./Buy_Tickets";

function Purchase() {
  return (
    <>
      <div className="Purchase">
        <div className="ani-home">
          <p className=" ani-p">Home //</p>
          <h1 className="ani-h">Buy Tickets </h1>
          <p className=" ani-p">
            Aquariums offer an interactive experience where visitors can touch,
            feed, <br />
            and interact with marine life and other animals through hands-on
            exhibits.
          </p>
        </div>
        <Buy_Tickets />
      </div>
    </>
  );
}

export default Purchase;
