function Home_Stories({ s_img, title, title_two, s_time, s_spots }) {
  return (
    <>
      <div className="cardd d-flex ay " data-aos="fade-up">
        <span className="coverimg ">
          <img src={s_img} />
          <span className="text">
            <h2 className="tite">{title}</h2>
            <h6 className="fad">{title_two}</h6>
          </span>
        </span>
        <span className="date">
          <h2 className="tite fsmall">{s_time}</h2>
          <h6 className="fad">{s_spots}</h6>
        </span>
      </div>
    </>
  );
}
export default Home_Stories;
