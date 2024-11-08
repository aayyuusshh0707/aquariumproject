import React, { useEffect } from "react";

function Visit() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  });

  return (
    <>
      <div className="containter-Visit ">
        <div className="visit-home">
          <div className="vis" data-aos="fade-up" data-aos-duration="1500">
            <span className="sapn-text ">Home //</span>
            <h1 className="text">Plan Your Visit</h1>
          </div>
        </div>
        <div className="container-fluid coverimgbig-visit ">
          <span className="sapn-text service">Hours of Operation</span>
        </div>
        <div className="cardbig-visit">
          <div className="coverimgbig-visit">
            <img
              src="https://aqua.org/assets/landscapes/_generic_768px_2x/63173/2019-11-20_landscape_building-exterior-twlight_center-center_001.webp"
              img-fluid
            />
          </div>

          <div className="cardbig-text">
            <span className="sapn-text service"> Hours </span>
            <h1
              className="head-visit "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              September Hours at the Aquarium
            </h1>
            <p
              className=" p-para  "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Last Aquarium entry is 60 minutes before closing.
              <a href="https://en.wikipedia.org/wiki/Harike_Wetland">
                Harbor Wetland hours
              </a>
              may differ from daily Aquarium operating hours.
            </p>

            <div
              className="Table-Visit p-para "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="row-v">
                <div className="day "> Monday-Thursday</div>
                <div className="time">9 am - 6 pm</div>
              </div>
              <div className="row-v ">
                <div className="day ">Friday</div>
                <div className="time">9 am - 9 pm</div>
              </div>
              <div className="row-v">
                <div className="day ">Saturday-Sunday</div>
                <div className="time">9 am - 6 pm</div>
              </div>
              <div className="row-v">
                <div className="day ">September 1</div>
                <div className="time">9 am - 7 pm</div>
              </div>
            </div>
            <div
              className="vist-btn"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <a href="/Purchase">
                <button>Book Now</button>
              </a>
            </div>
          </div>
        </div>

        <div className="direction">
          <div className="dir-vis">
            <div className="dir-text">
              <h1 className=" head-visit">Getting to the Aquarium </h1>
              <p className=" p-para ">
                The National Aquarium is located in the heart of downtown
                Baltimore on the Inner Harbor, easily accessible by all modes of
                The National Aquarium is located in the heart of downtown
                Baltimore on the Inner Harbor, easily accessible by all modes of
                transportation. Our address is{" "}
                <a href=""> 501 E. Pratt St., Baltimore, MD 21202</a>.
              </p>
            </div>

            <div className="plus-visit">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Parking
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      The National Aquarium has three official parking partners
                      nearby—Harbor Park Garage, LAZ Inner Harbor Garage and
                      Parkway Lockwood Place Garage. These garages offer
                      discounted parking rates for National Aquarium guests and
                      members. Guests and members must validate their parking
                      ticket inside the Aquarium to receive the discount.
                      <br />
                      <br />
                      National Aquarium members receive the most generous
                      parking discount at our partner garages. For information
                      about the member parking discount, please visit the{" "}
                      <a href=""> membership page</a>.
                      <br />
                      <br />
                      There is an early-bird parking discount for those who park
                      in these garages before 9 am, Monday through Friday. If
                      you arrive before this time, we recommend you do not
                      validate your parking ticket at the Aquarium, as that will
                      override the early-bird parking discounts.
                      <br />
                      <br />
                      All three garages provide accessible parking spaces. Also,
                      on-street parking is available with ADA-compliant meters.
                      <br />
                      <br />
                      <h6 className="plus-head">Harbor Park Garage</h6>
                      <span className="plus-bold">Address:</span> 55 Market
                      Place, Baltimore, MD 21202
                      <br />
                      <span className="plus-bold">
                        Distance from the National Aquarium
                      </span>
                      : 0.3 miles
                      <br />
                      Aquarium general admission guests can reserve a spot in
                      Harbor Park Garage online in advance.
                      <br />
                      <br />
                      <h6 className="plus-head">LAZ Inner Harbor Garage</h6>
                      <span className="plus-bold">Address:</span> 100 S. Gay
                      St., Baltimore, MD 21202
                      <br />
                      <span className="plus-bold">
                        Distance from the National Aquarium:
                      </span>{" "}
                      0.2 miles
                      <br />
                      Aquarium general admission guests can reserve a spot in
                      LAZ Inner Harbor Garage online in advance.
                      <br />
                      <br />
                      <h6 className="plus-head">
                        Parkway Lockwood Place Garage
                      </h6>
                      <span className="plus-bold">Address:</span> 124 Market
                      Place, Baltimore, MD 21202
                      <br />
                      <span className="plus-bold">
                        Distance from the National Aquarium:
                      </span>{" "}
                      0.2 miles
                      <br />
                      Aquarium general admission guests can reserve a spot in
                      Parkway Lockwood Place Garage online in advance.
                      <br />
                      <br />
                      <h6 className="plus-head">
                        Parking Discount Instructions
                      </h6>
                      How to receive in-person parking discount at our partner
                      garages:
                      <br />
                      <br />
                      1. Enter the chosen garage by taking a ticket and parking.
                      Be sure to bring the ticket with you into the Aquarium.
                      <br />
                      <br />
                      2.Get your parking ticket validated at the end of your
                      visit before you exit the Aquarium.
                      <br />
                      <br />
                      3.Take the validated ticket to the parking garage lobby,
                      and the automated machines will discount the parking based
                      on your length of stay.
                      <br />
                      <br />
                      4.For general admission ticketholders, if you reserve your
                      parking online in advance, the rate you are charged is the
                      discounted Aquarium guest rate. For National Aquarium
                      members, please do not reserve parking online in advance
                      as we are then unable to provide the member discount.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      By Rail
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <span className="plus-bold text-primary"> Amtrak:</span>{" "}
                      Penn Station: 1500 N. Charles Street—only 1.06 miles from
                      the Aquarium. Taxi and bus service are available from the
                      station, as well as the free Charm City Circulator and
                      ride-sharing services.
                      <br />
                      <br />
                      <span className="plus-bold text-primary">
                        Light Rail:
                      </span>{" "}
                      Convention Center and Camden Yards Light Rail Stops
                      <br />
                      <br />
                      <span className="plus-bold text-primary ">
                        MARC Train:
                      </span>{" "}
                      Camden Yards and Penn Station MARC Train Stops
                      <br />
                      <br />
                      <span className="plus-bold text-primary">
                        Metro Subway:
                      </span>{" "}
                      Shot Tower/Market Place Metro Subway Station
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      By Bus
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <span className="plus-bold text-primary ">Bus:</span>span
                      Bus Lines CityLink Yellow, CityLink Navy, CityLink Brown,
                      LocalLink 54 and LocalLink 65
                      <br />
                      <br />
                      <span className="plus-bold text-primary ">
                        Charm City Circulator:
                      </span>{" "}
                      Fast, free and eco-friendly! The National Aquarium is
                      conveniently located on the Orange Line of the Charm City
                      Circulator.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="map-visit">
          <div className="cardbig-visit">
            <div className="coverimgbig-visit map">
              <img
                src="https://aqua.org/assets/landscapes/_generic_1920px_2x/364730/2020-05-21_btr_omega-whale-skeleton_center-top_001.webp"
                img-fluid
              />
            </div>

            <div className="cardbig-text">
              <span className="sapn-text service">Maps & More</span>
              <h1 className="head-visit ">Download Our Map</h1>
              <p className=" p-para  ">
                Before your visit, download the Aquarium map to help you
                navigate our award-winning exhibits and locate restrooms, water
                fountains, dining options and more. Or, pick up a printed
                version at the information desk, located across from the 4D
                Immersion Theater on Level 1 of Blue Wonders.Last Aquarium entry
                is 60 minutes before closing.
              </p>

              <div className="vist-btn">
                <a
                  href=" https://aqua.org/assets/documents/National-Aquarium-Guide-Map.pdf"
                  download="Maps.pdf"
                >
                  <button>Download Map</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="blog">
          <header>
            <h1></h1>
          </header>
          <div className="vis-band">
            <div className="item-1">
              <a href="" className="vis-card">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(https://images.pexels.com/photos/11279931/pexels-photo-11279931.jpeg?auto=compress&cs=tinysrgb&w=600)",
                  }}
                />
                <article>
                  <h5>International Artist Feature: Malaysia</h5>
                  <span>Mary Winkler</span>
                </article>
              </a>
            </div>
            <div className="item-2">
              <a href="" className="vis-card">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(https://images.pexels.com/photos/78790/perch-cichlid-discus-cichlid-freshwater-fish-78790.jpeg?auto=compress&cs=tinysrgb&w=600)",
                  }}
                />
                <article>
                  <h5>How to Conduct Remote Usability Testing</h5>
                  <span>Harry Brignull</span>
                </article>
              </a>
            </div>
            <div className="item-3">
              <a href="" className="vis-card">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(https://images.pexels.com/photos/12652728/pexels-photo-12652728.jpeg?auto=compress&cs=tinysrgb&w=600)",
                  }}
                />
                <article>
                  <h5>Created by You, July Edition</h5>
                  <p>
                    Welcome to our monthly feature of fantastic tutorial results
                    created by you, the Envato Tuts+ community!{" "}
                  </p>
                  <span>Melody Nieves</span>
                </article>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Visit;
