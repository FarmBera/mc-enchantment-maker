import { React } from "react";
import styled from "styled-components";

import ColorFolder from "../data/ColorFolder";

const TIMEZONE = "Asia/Seoul";

function Footers() {
  return (
    <FooterContainer>
      <div>
        <span className="desc">
          All Rights Reserved unless otherwise explicitly stated.
        </span>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
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

export default Footers;
