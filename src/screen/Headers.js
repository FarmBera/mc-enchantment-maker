import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Clock from "react-live-clock";

import ColorFolder from "../data/ColorFolder";

const TIMEZONE = "Asia/Seoul";

function Headers() {
  return (
    <HeaderContainer>
      <div className="Headers">
        <span className="h1">MC Enchant Maker</span>
        <span className="space"></span>
        <span className="clock">
          <Clock format={"ddd MMM DD"} ticking={false} timezone={TIMEZONE} />
          {"  "}
          <Clock format={"HH:mm:ss"} ticking={true} timezone={TIMEZONE} />
        </span>
        {/* <span className="space">
          <button onClick="">English</button>
        </span>
        <span className="space">
          <button onClick="">Korean</button>
        </span> */}
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  span {
    justify-content: space-between;
  }
  .space {
    margin-left: 20px;
  }
  .h1 {
    font-size: 30px;
    font-weight: bold;
  }
  .clock {
  }
`;

export default Headers;
