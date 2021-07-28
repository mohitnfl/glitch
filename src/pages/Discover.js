import React from "react";
import Explore from "../components/ExploreSection/Explore";
import Header from "../components/Header/Header";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import RightSideBar from "../components/RightSideBar/RightSideBar";
import Search from "../components/SearchArea/Search";
import TrendingNow from "../components/TrendingSection/TrendingNow";

const Discover = () => {
  return (
    <div>
      <div class="page-wrapper chiller-theme">
        <LeftSideBar />
        <main class="page-content">
          <div class="page_card">
            <div class="row">
              <div class="col-md-7 col-lg-9">
                <div class="dashboard_area">
                  <Header />
                  <Search />
                  <Explore />
                  <TrendingNow />
                </div>
              </div>

              <RightSideBar />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Discover;
