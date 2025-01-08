import React from "react";
import { useState } from "react";

function Buy_Tickets() {
  //plus count
  const [count, setCount] = useState(0);
  const [change, setChange] = useState(0);

  const [isformSubmited, setisformSubmited] = useState(false);

  // form validation

  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [UserErr, setuserErr] = useState(false);
  const [PassErr, setPassErr] = useState(false);

  function userhandler(e) {
    let items = e.target.value;
    if (items.length <= 3) {
      setuserErr(true);
    } else {
      setuserErr(false);
    }
    setuser(items);
  }

  function passhandler(e) {
    let items = e.target.value;

    // Check if items length is 10 and all characters are numbers
    if (items.length === 10 && /^[0-9]+$/.test(items)) {
      setPassErr(false); // Valid input, no error
    } else {
      setPassErr(true); // Invalid input, show error
    }

    setpass(items);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Check if form fields meet the basic criteria
    if (user.length > 3 && pass.length === 10 && /^[0-9]+$/.test(pass)) {
      setisformSubmited(true);
      alert("Congratulations, Your ticket booked 🎉🎫✈️");
    } else {
      alert("Please fill the form correctly");
    }
  }

  return (
    <>
      <div className="tick-form">
        <div id="booking" className="section">
          <div className="section-center">
            <div className="container">
              <div className="row">
                <div className="booking-form">
                  <div className="booking-bg" />

                  <form onSubmit={handleSubmit} className="formbody">
                    <div className="form-header">
                      <h2>Make your Visit</h2>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <span className="form-label">Check In</span>
                            <input className="form-control" type="date" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <span className="form-label">Check In Time</span>
                            <input className="form-control" type="time" />
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <span className="form-label">Adults</span>
                          <br />
                          <span className="form-control">
                            <button
                              type="button"
                              className="plus"
                              onClick={() => count > 0 && setCount(count - 1)}
                            >
                              -
                            </button>
                            {count}
                            <button
                              type="button"
                              className="plus"
                              onClick={() => setCount(count + 1)}
                            >
                              +
                            </button>
                          </span>
                          <span className="select-arrow" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <span className="form-label">Children</span>
                          <br />

                          <span className="form-control">
                            <button
                              type="button"
                              className="plus"
                              onClick={() =>
                                change > 0 && setChange(change - 1)
                              }
                            >
                              -
                            </button>
                            {change}
                            <button
                              type="button"
                              className="plus"
                              onClick={() => setChange(change + 1)}
                            >
                              +
                            </button>
                          </span>

                          <span className="select-arrow" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="form-label">Name</span>
                      <input
                        value={user}
                        onChange={userhandler}
                        className="form-control"
                        type="Text"
                        placeholder="Enter your Name"
                      />{" "}
                      <br />
                      {UserErr ? (
                        <span style={{ color: "red" }}>
                          Name should contain Min* 5 letters
                        </span>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="form-group">
                      <span className="form-label">Phone</span>
                      <input
                        value={pass}
                        onChange={passhandler}
                        className="form-control"
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                      <br />
                      {PassErr ? (
                        <span style={{ color: "red" }}>
                          Not Valid, please enter exactly 10 digits.
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-btn">
                      {isformSubmited ? (
                        <button
                          type="downlode"
                          className="submit-btn"
                         // onClick={handledownload}
                        >
                          Download Ticket
                        </button>
                      ) : (
                        <button type="submit" className="submit-btn">
                          Book Now
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buy_Tickets;
