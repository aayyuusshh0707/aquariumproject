import React from "react";
import Animal_Cards from "./Animal_Cards";

function Animals() {
  return (
    <>
      <div className="Animal-page">
        <div className="ani-home">
          <p className=" ani-p">Explore //</p>
          <h1 className="ani-h">Animals</h1>
          <p className=" ani-p">
            Whether they’re finned or scaled, deep-sea swimmers or treetop
            dwellers, each one of the thousands <br />
            of animals at the National Aquarium has a unique story to tell.
          </p>
        </div>

        <div className="ani-cards ">
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
                "https://aqua.org/assets/animals/_narrow_tile_2x/66449/2019-12-19-_animal_atlantic-bay-nettle_center-center_001.webp"
              }
              name={"  Striped Burrfisha "}
              sname={"(Chilomycterus schoepfi)"}
            />
            <Animal_Cards
              img={
                "https://aqua.org/assets/animals/_narrow_tile_2x/66451/2020-04-0_animal_jade-dolphin-swimming_center-center-001.webp"
              }
              name={"    Atlantic Bottlenose Dolphin  "}
              sname={" (Tursiops truncatus)"}
            />
          </div>

          <div className="ani-line">
            <Animal_Cards
              img={
                "https://aqua.org/assets/animals/_narrow_tile_2x/66446/2019-06-13_animal_black-grouper_center-center_001.webp"
              }
              name={"   Black Grouper"}
              sname={"(Mycteroperca bonaci)"}
            />
            <Animal_Cards
              img={
                "https://aqua.org/assets/animals/_narrow_tile_2x/68774/2017-06-14_animal_horseshoe-crab_center-center_001.webp"
              }
              name={"    Atlantic Bay Nettle"}
              sname={" (Chrysaora chesapeakei)"}
            />
            <Animal_Cards
              img={
                "https://aqua.org/assets/animals/_narrow_tile_2x/66419/2011-11-16-_animal_american-bullfrog_center-center_001.webp"
              }
              name={"American Bullfrog"}
              sname={"(Lithobates catesbeiana)"}
            />
          </div>

          <div className="ani-line">
            <Animal_Cards
              img={
                "https://aqua.org/assets/animals/_narrow_tile_2x/66431/2017-03-31-_animal_atlantic-puffin_center-center_001.webp"
              }
              name={"Atlantic Puffin"}
              sname={"(Fratercula arctica)"}
            />
            <Animal_Cards
              img={
                "https://aqua.org/assets/animals/_narrow_tile_2x/66441/2019-03-20_animal_banggai-cardinalfish-bright_center-center_001.webp"
              }
              name={"  Banggai Cardinalfish"}
              sname={"(Pterapogon kauderni)"}
            />

            <Animal_Cards
              img={
                "https://aqua.org/assets/animals/_narrow_tile_2x/66432/2017-05-20_animal_barramundi_center-center_001.webp"
              }
              name={"    Cardinalfish"}
              sname={"(Lates calcarifer)"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Animals;
