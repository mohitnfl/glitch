import React from "react";

// const data = [
//     {
//         id: 1,
//         image: "assets/img/trending-img-2.png",
//         duretion: "",
//         heading: "",
//         subheading:""
//     }
// ]

const TrendingNow = () => {
  return (
    <div>
      <h3>Trending Now</h3>
      <div className="trending_now">
        <div className="row">
          {[...new Array(6)].map((item) => (
            <div className="col-md-6 col-lg-4">
              <div className="trending_card">
                <div className="trending_img">
                  <img src="assets/img/trending-img-2.png" alt="" />
                  <span>34:23</span>
                </div>
                <h5>Division Rivals Grid</h5>
                <p>240k views . 21 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
