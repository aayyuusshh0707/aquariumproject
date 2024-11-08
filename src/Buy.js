import React, { useEffect, useState } from "react";
import Buy_Tickets from "./Buy_Tickets";
import Buy_Card_price from "./Buy_Card_price";

function Buy() {
  //Aos link
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  });

  //timer

  // Set the initial time to 24 hours (in seconds)
  const oneDayInSeconds = 2 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(oneDayInSeconds);

  useEffect(() => {
    // Create the interval to decrement time every second
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  // Helper function to format time as HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <div className="container-buy">
        <div className="Buy-home">
          <div className="buy-vis" data-aos="fade-up" data-aos-duration="1500">
            <span className="sapn-text ">home //</span>
            <h1 className="text">Tickets</h1>
          </div>
        </div>
        <div className="buy-body">
          <div className="countdo">
            <h1> AQUARIUM OPEN'S IN</h1>
          </div>
          <div className="countdown-container ">
            <h1>{formatTime(timeLeft)}</h1>
          </div>

          <div className="buy_Cards">
            <Buy_Card_price
              edition={"Children edition"}
              price={"$10.99"}
            ></Buy_Card_price>
            <Buy_Card_price
              edition={"general edition"}
              price={"$20.99"}
            ></Buy_Card_price>

            <Buy_Card_price
              edition={"VIP Gold edition"}
              price={"$39.99"}
            ></Buy_Card_price>
          </div>
          <div className="container-fluid">
            <br />
            <br />
            <center>
              <h1 className="sapn-text service head"> Purchase Tickets</h1>
            </center>
            <p className=" p-para ">
              A general admission ticket to the National Aquarium includes
              access to all exhibits and daily presentations. Last Aquarium
              entry is 60 minutes before closing.
              <br />
              For assistance, please email admissions@aqua.org. To speak with a
              representative, please contact us at 410-659-4269, from 9 am to
              4:30 pm, seven days a week.
              <br />
              *All admission purchases are non-transferable and non-refundable .
            </p>
          </div>

          <div className="tick-form">
            <Buy_Tickets />
          </div>
        </div>
      </div>
    </>
  );
}

export default Buy;
