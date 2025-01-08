import React, { useEffect } from "react";
import Home_Stories from "./Home_Stories";
import { NavLink } from "react-router-dom";

function Homeo() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  });
  return (
    <>
      <div className="home">
        <div className="containerr">
          <div className="image">
            <video src="/3.mp4" muted autoPlay loop></video>

            <div className="overlay1">
              <span className="sapn-text  ">Plan Your Aquarium Visit</span>
              <h1 className="text ">We'd Love to See You!</h1>
              <span className="sapn-text ">
                From easy timed entry to tours and experiences , your Aquarium
                experience is just a few clicks away.
              </span>
              <br />
              <br />
              <NavLink to="/Purchase">
                <button >Buy Tickets</button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="sche">
          <div className="container-fluid">
            <span className="sapn-text service">Daily Schedule</span>
            <br />
            <br />
            <h1 className="sapn-text service head">What's Happening?</h1>
          </div>

          <div className="cards d-flex ">
            <div className="right">
              <div className="cardbig">
                <div className="coverimgbig">
                  <img src="https://aqua.org/assets/landscapes/_generic_768px_2x/63173/2019-11-20_landscape_building-exterior-twlight_center-center_001.webp" />
                </div>
                <div className="sapn-text">
                  <div className=" sapn-text contentt">
                    <div>
                      <i class="fa-solid fa-clock"></i>Today's Hours: 9 am - 6
                      pm
                    </div>
                    <br />
                    <div>
                      <i class="fa-solid fa-location-dot"></i> Address: 501 E.
                      Pratt St. Baltimore, MD 21202
                    </div>
                    <br />
                    <div>
                      <i class="fa-solid fa-phone"></i>Phone: 410-576-3800
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="left">
              <Home_Stories
                s_img="https://aqua.org/assets/animals/_bar_2x/76764/2020-04-01_animal_two-dolphins-bayley-chesapeake_center-center_002.webp"
                title="Dolphin Tour"
                title_two="Dolphin Discovery"
                s_time="Aug 28 @ 11:30 am"
                s_spots="2 Spots Left"
              />
              <Home_Stories
                s_img="https://aqua.org/assets/animals/_bar_2x/92862/2017-02-22_animal_blacktip-reef-shark_center_001.webp"
                title="Shark Talk"
                title_two="Blacktip Reef"
                s_time="Aug 28 @ 11:30 am"
                s_spots="12 Spots Left"
              />
              <Home_Stories
                s_img="https://images.pexels.com/photos/1683975/pexels-photo-1683975.jpeg?auto=compress&cs=tinysrgb&w=600"
                title="Family Tour"
                title_two="Atlantic Coral Reef"
                s_time="Aug 28 @ 8:15 am"
                s_spots="12 Spots Left"
              />
              <Home_Stories
                s_img="https://aqua.org/assets/animals/_bar_2x/1137533/2017-07-14_feeding_aquarist-feeding-barramundi-australia-exhibit_center-top_001.webp"
                title="Animal Encounter"
                title_two="Harbor Overlook"
                s_time="Aug 28 @ 10:00 am"
                s_spots="05 Spots Left"
              />
              <Home_Stories
                s_img="https://aqua.org/assets/animals/_bar_2x/92861/2016-08-16_animal_puffin-eating_center_001.webp"
                title="Puffin Talk"
                title_two="North Atlantic to the Pacific"
                s_time="Oct 10 @ 11:20 am"
                s_spots=""
              />
              <Home_Stories
                s_img="https://aqua.org/assets/animals/_bar_2x/1071084/2018-12-05_sharks_sandbar-shark-swimming-upwards-shark-alley_center-center_001.webp"
                title="Shark Talk"
                title_two="Shark Alley"
                s_time="Oct 11 @ 01:20 pm"
                s_spots="7 Spots Left"
              />

              <br />
              <a href="/Explore">
             
                <button>Explore More</button>
              </a>
            </div>
          </div>
        </div>

        <div className="featured container-fluid">
          <div className="feat-content">
            <span className="sapn-text text-black fs-6 ">Featured Animals</span>
            <h1 className="head para">
              Thousands of animals. Hundreds of species. One Aquarium.
            </h1>
            <p className="sapn-text text-black fe-pa">
              Learn about animals from all over our blue planet—from the depths
              of the ocean to the canopy of the rain forest—and discover the
              connection they all share with water.
            </p>
            <a href="/animals">
              <button>Meet Our Animals </button>
            </a>

          </div>

          <div className="feat-left ">
            <img src="https://aqua.org/assets/animals/_first_column_cell_on_tablet_and_above_2x/66431/2017-03-31-_animal_atlantic-puffin_center-center_001.webp" />
          </div>
          <div className="feat-mid">
            <img src="https://aqua.org/assets/animals/_column_cell_on_tablet_and_above_2x/70142/2017-05-17_animal_peacock-mantis-shrimp_001.webp" />
            <img src="https://aqua.org/assets/animals/_column_cell_on_tablet_and_above_2x/66440/2019-02-28_animal_blacktip-reef-shark_center-center_001.webp" />
            <img src="https://aqua.org/assets/animals/_column_cell_on_tablet_and_above_2x/68788/2019-06-04_animal_harlequin-tuskfish_center-center_001.webp" />
          </div>
        </div>


        
        <div className="bott-cards">
          <div className="wrap">
            <div data-aos="zoom-in" className="box">
              <div className="box-top">
                <img
                  className="box-image"
                  src="https://aqua.org/assets/animals/_narrow_tile_2x/1627093/2022-05-19_guests_young-girl-leaning-over-moon-jellies-touchpool-in-living-seashore-and-reaching-in-to-touch-them_center-center_001.webp"
                  alt="Girl Eating Pizza"
                />
                <div className="title-flex">
                  <h3 className="box-title">Living Seashore</h3>
                  <p className="user-follow-info"></p>
                </div>
                <p className="description">
                  Discover the treasures of the mid-Atlantic in this
                  interactive, hands-on exhibit.
                </p>
              </div>
            </div>



            <div data-aos="zoom-in" className="box">
              <div className="box-top">
                <img
                  className="box-image"
                  src="https://aqua.org/assets/landscapes/_narrow_tile_2x/81097/2019-09-02_acrc_acrc-exterior-mural_center-center_001.webp"
                  alt="Girl Eating Pizza"
                />
                <div className="title-flex">
                  <h3 className="box-title">Animal Care and Rescue Center</h3>
                  <p className="user-follow-info"></p>
                </div>
                <p className="description">
                  Go behind the scenes to explore this innovative, world-class
                  home for Aquarium animals and some of our rescue operations.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" className="box">
              <div className="box-top">
                <img
                  className="box-image"
                  src="https://aqua.org/assets/animals/_narrow_tile_2x/345420/2016-10-07_animal_atlantic-coral-reef_center_001.webp"
                  alt="Girl Eating Pizza"
                />
                <div className="title-flex">
                  <h3 className="box-title">Atlantic Coral Reef</h3>
                  <p className="user-follow-info"></p>
                </div>
                <p className="description">
                  {" "}
                  Descend through a bustling Caribbean reef home to hundreds of
                  fishes.
                </p>
              </div>
            </div>
            <div d data-aos="zoom-in" className="box">
              <div className="box-top">
                <img
                  className="box-image"
                  src="https://aqua.org/assets/landscapes/_narrow_tile_2x/1631814/2024-08-10_exterior_aerial-view-of-completed-harbor-wetland-exhibit-with-people-on-the-deck-and-mural-in-background_center-center_001.webp"
                  alt="Girl Eating Pizza"
                />
                <div className="title-flex">
                  <h3 className="box-title">Harbor Wetland</h3>
                  <p className="user-follow-info"></p>
                </div>
                <p className="description">
                  {" "}
                  Immerse yourself in a re-created salt marsh habitat like those
                  that existed in Baltimore City hundreds of years ago.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homeo;
