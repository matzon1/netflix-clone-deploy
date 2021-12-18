import React from "react";
import "./Nav.css";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="nav--logo">
        <a href="/">
          <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
        </a>
      </div>
      <div className="nav--user">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
      </div>
    </header>
  );
};
