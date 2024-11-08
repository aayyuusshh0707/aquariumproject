import React, { useEffect } from "react";
import Animal_Cards from "./Animal_Cards";

function Explore() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  });
  return (
    <>
      <div className="explore-container">
        <div className="Explore-home">
          <div className="ex-vis" data-aos="fade-up" data-aos-duration="1500">
            <span className="sapn-text ">home //</span>
            <h1 className="text">Explore</h1>
          </div>
        </div>

        <div className="ani-cards ">
          <div className="container-fluid">
            <br />
            <br />
            <h1 className="sapn-text service head">Our Animals</h1>
            <p className=" p-para ">
              Explore our state-of-the-art Animal Care & Rescue Center. Travel
              behind the scenes. Discover how our expert staff cares for sick &
              injured animals before returning them home. Support our animals.
              Rehabilitating animals. Protect the aquatic world. Inspire
              conservation. Explore our state-of-the-art Animal Care & Rescue
              Center. Travel behind the scenes. Discover how our expert staff
              cares for sick & injured animals before returning them home.
              Support our animals. Rehabilitating animals. Protect the aquatic
              world. Inspire conservation.
            </p>
          </div>
          <div className="ani-line">
            <Animal_Cards
              img={
                "https://aqua.org/assets/animals/_narrow_tile_2x/70174/2020-04-01_animal_striped-burrfish_center-center_001.webp"
              }
              name={" Striped Burrfisha"}
              sname={"(Chilomycterus schoepfi)"}
            />
            <Animal_Cards
              img={
                "https://aqua.org/assets/animals/_narrow_tile_2x/66432/2017-05-20_animal_barramundi_center-center_001.webp"
              }
              name={"    Cardinalfish"}
              sname={"(Lates calcarifer)"}
            />
            <Animal_Cards
              img={
                "https://aqua.org/assets/animals/_narrow_tile_2x/66451/2020-04-0_animal_jade-dolphin-swimming_center-center-001.webp"
              }
              name={"    Atlantic Bottlenose Dolphin  "}
              sname={" (Tursiops truncatus)"}
            />
          </div>

          <br />

          <a href="/animals">
            <center>
              <button>More</button>
            </center>
          </a>
        </div>

        <div className="container-fluid">
          <h1 className="sapn-text service head">Meet Our Experts</h1>
          <div className="Exo-Expert">
            <div className="svg-side">
              <div className="feat-content">
                <h1 className="head para text-white">Jack Cover</h1>
                <p className="sapn-text  fe-pa">
                  As the National Aquarium's general curator, Jack Cover ensures
                  that all animals in our care thrive in healthy, beautiful
                  habitats.
                </p>
              </div>
            </div>

            <div className="Expert-img">
              <img
                src="https://aqua.org/assets/people/_generic_1920px_1x/59222/2017-05-01_people_jack-cover-canoe_right-center_001.webp"
                img-fluid
              />
            </div>
          </div>
          <br />
          <div className="Exo-Expert2">
            <div className="svg-side">
              <div className="feat-content">
                <h1 className="head para text-white">Zoe Smith</h1>
                <p className="sapn-text  fe-pa">
                  She is a professional affiliate of the Association of Zoos and
                  member of the Turtle Conservancy and Natural History Society
                  of Maryland.
                </p>
              </div>
            </div>
            <div className="Expert-img">
              <img
                src="https://media.istockphoto.com/id/1357465008/photo/happy-young-woman-swims-with-dolphin-in-blue-water-dolphin-therapy-concept.jpg?s=612x612&w=0&k=20&c=IPIjwpVRbso1TWZdNWYcDf9vEgiYRYNeEYWYY_B-1bk="
                img-fluid
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="container-Stories">
          <center>
            <div className="container-fluid">
              <span className="sapn-text service ">Featured Storiese</span>
              <br />
              <br />
              <h1 className="sapn-text service head">
                The Latest From the National Aquarium
              </h1>
            </div>
          </center>
          <div className="Exoplore-cards">
            <div className="ani-line">
              <div className="Exo-card">
                <div className="Exo-card-image">
                  <img src="https://aqua.org/assets/people/_wide_card_2x/1636995/2015-09-26_people_chef-cooking-mirepoix-in-stainless-steel-pan_center-center_001.webp"></img>
                </div>
                <div className="category"> Conservation</div>
                <div className="heading">
                  Eating Invasive Species
                  <div className="author">
                    By <span className="name">Akshay</span> 1 days ago
                  </div>
                </div>
              </div>
              <div className="Exo-card">
                <div className="Exo-card-image">
                  <img src="https://aqua.org/assets/animals/_wide_card_2x/1641233/2023-06-08_animals_close-up-of-a-colorful-cluster-of-great-star-coral_center-center_001.webp"></img>
                </div>
                <div className="category">Multimedia</div>
                <div className="heading">
                  {" "}
                  Wallpaper Wednesdays: Coral Close-Up
                  <div className="author">
                    By <span className="name">Shumbham</span> 1 days ago
                  </div>
                </div>
              </div>
              <div className="Exo-card">
                <div className="Exo-card-image">
                  <img src="https://aqua.org/assets/landscapes/_wide_card_2x/1637409/2024-07-03_landscape_aerial-view-of-jones-falls-stream-surrounded-by-green-trees-flows-in-between-whitehall-mill-and-light-rail-train-tracks-in-hampden_center-center_001.webp"></img>
                </div>
                <div className="category">Conservation</div>
                <div className="heading">
                  Keeping Up With the Jones Falls
                  <div className="author">
                    By <span className="name">Aman</span> 7 days ago
                  </div>
                </div>
              </div>
            </div>

            <div className="ani-line">
              <div className="Exo-card">
                <div className="Exo-card-image">
                  <img src="https://aqua.org/assets/landscapes/_wide_card_2x/1617506/2019-09-04_environmental_ocean-waves-crashing-on-to-the-beach-at-assateague-island_center-center_001.webp"></img>
                </div>
                <div className="category">Multimedia</div>
                <div className="heading">
                  Quiz: Which Mid-Atlantic Animal Are You?
                  <div className="author">
                    By <span className="name">Ayush</span> 2 days ago
                  </div>
                </div>
              </div>
              <div className="Exo-card">
                <div className="Exo-card-image">
                  <img src="https://aqua.org/assets/animals/_wide_card_2x/1610089/2022-02-02_animals_dorsal-fin-of-atlantic-bottlenose-dolphin-breaching-surface-in-dolphin-discovery-pool_center-center_001.webp"></img>
                </div>
                <div className="category">Animals</div>
                <div className="heading">
                  Mistaken Identities: Dolphins vs. Porpoises
                  <div className="author">
                    By <span className="name">Atul</span> 6 days ago
                  </div>
                </div>
              </div>
              <div className="Exo-card">
                <div className="Exo-card-image">
                  <img src="https://aqua.org/assets/landscapes/_wide_card_2x/891705/2017-03-28_drone_aerial-view-of-waves-crashing-in-the-ocean-off-the-shore-of-washington-oaks-gardens-state-park_center-center_001.webp"></img>
                </div>
                <div className="category">Multimedia</div>
                <div className="heading">
                  Wallpaper Wednesdays: Celebrate Ocean Month
                  <div className="author">
                    By <span className="name">Abi</span> 4 days ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
