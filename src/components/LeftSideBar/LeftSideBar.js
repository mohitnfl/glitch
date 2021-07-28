import React from "react";

const LeftSideBar = () => {
  return (
    <div>
      <aside id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <img src="assets/img/company_logo.png" className="logo_1" />
            <img
              src="assets/img/favicon.png"
              alt=""
              className="logo_2"
              id="logoToggle"
            />
            <div id="close-sidebar">
              <i className="fa fa-cog"></i>
            </div>
          </div>
          <div className="sidebar-menu">
            <p className="my_friends">
              <strong>My Friends</strong>
              <span>
                Online only
                <label className="toggle_switch">
                  <input type="checkbox" checked />
                  <span className="toggle_slider toggle_round"></span>
                </label>
              </span>
            </p>
            <ul>
              <li className="active">
                <a href="#">
                  <div className="sidebar_profile">
                    <img src="assets/img/outer_world_user02.png" alt="" />
                  </div>
                  <span>Live Tracker</span>
                  <div className="form_check">
                    <label className="check_container">
                      <input type="checkbox" checked="checked" />
                      <span className="check_checkmark"></span>
                    </label>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    className="sidebar_profile"
                    style={{ backgroundColor: "rgb(250 114 103 / 60%)" }}
                  >
                    <p>AB</p>
                  </div>
                  <span>Dashboard</span>
                  <div className="form_check">
                    <label className="check_container">
                      <input type="checkbox" checked="checked" />
                      <span className="check_checkmark"></span>
                    </label>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    className="sidebar_profile"
                    style={{ backgroundColor: "rgb(97 59 255 / 60%)" }}
                  >
                    <p>AB</p>
                  </div>
                  <span>Admin</span>
                  <div className="form_check">
                    <label className="check_container">
                      <input type="checkbox" checked="checked" />
                      <span className="check_checkmark"></span>
                    </label>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sidebar_profile">
                    <img src="assets/img/outer_world_user05.png" alt="" />
                  </div>
                  <span>Admin</span>
                  <div className="form_check">
                    <label className="check_container">
                      <input type="checkbox" checked="checked" />
                      <span className="check_checkmark"></span>
                    </label>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sidebar_profile">
                    <p>AB</p>
                  </div>
                  <span>Admin</span>
                  <div className="form_check">
                    <label className="check_container">
                      <input type="checkbox" checked="checked" />
                      <span className="check_checkmark"></span>
                    </label>
                  </div>
                </a>
              </li>
            </ul>
            <p className="sidebar_show_more">Show More</p>
          </div>
          <div className="sidebar_search">
            <div className="sidebar_search_area">
              <input
                type="text"
                className="form-control"
                placeholder="Search in friends..."
              />
              <em className="fa fa-search"></em>
            </div>
            <div className="sidebar_expand" id="show-angle-sidebar">
              <em className="fa fa-angle-right"></em>
            </div>
            <div className="form_check all_check" id="toggle-square">
              <div className="toggle_square"></div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default LeftSideBar;
