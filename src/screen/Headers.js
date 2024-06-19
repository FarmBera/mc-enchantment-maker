import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Clock from "react-live-clock";

import ColorFolder from "../data/ColorFolder";

const TIMEZONE = "Asia/Seoul";

function Headers() {
  return (
    <div className="Headers">
      <h1>MC Enchant Maker</h1>
      <h3>
        <Clock format={"ddd MMM DD"} ticking={false} timezone={TIMEZONE} />
        {"  "}
        <Clock format={"HH:mm:ss"} ticking={true} timezone={TIMEZONE} />
      </h3>
    </div>
  );
}

export default Headers;
