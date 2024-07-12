import { React, useState, useEffect } from "react";
import styled from "styled-components";

// color
import ColorFolder from "../data/ColorFolder";

// modules

// variables
const l = (msg) => console.log(msg);

const CmdMode = ({ handleToggleText, btnValue }) => {
  // const btnValue = ["Single", "Multi"];
  // const [idx, setIdx] = useState(0);
  const [name, setName] = useState("ERR");

  useEffect(() => {
    // l(btnValue);
    if (btnValue) setName(`${btnValue}play Mode`);

    // if (btnValue) setName(btnValue);
  }, [btnValue]);

  // const handleToggleText = () => {
  //   setIdx((prevIdx) => (prevIdx + 1) % btnValue.length);
  // };

  return (
    <Container>
      <div>
        {/* <p>커맨드 모드 출력부분</p> */}
        <button onClick={handleToggleText}>{name}</button>
      </div>
      {/* <div>
        <input type="value" maxLength={2} />
      </div> */}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 16px;
  p {
    margin-top: 0;
  }
`;

export default CmdMode;
