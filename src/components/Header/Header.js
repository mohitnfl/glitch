import React from "react";

const Header = () => {
  return (
    <div>
      <ul className="dashboard_tabs">
        <li className="left_panel" id="show-angle-sidebar1">
          <img src="assets/img/right-arrow.svg" alt="" />
        </li>
        <li className="active">Discover</li>
        <li>Feed</li>
        <li>Games</li>
        <li>Videos</li>
        <li>Chats</li>
        <li>Label</li>
        <li className="right_panel" id="logoToggle1">
          <img src="assets/img/meat.svg" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
