import React from "react";
import "./styles/Title.css";

const Title = props => {
  return (
    <header id="title-root">
      <h4 className="To-DoList">DevMountain Student Checklist</h4>
      <img src="https://s3.amazonaws.com/devmountain/www/img/dm_white_logo.png" />
    </header>
  );
};

export default Title;
