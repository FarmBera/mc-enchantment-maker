import { React, useState, useEffect } from "react";
import styled from "styled-components";

// color
import ColorFolder from "../data/ColorFolder";

function Output({ cmdState, CommandOutputTxt }) {
  const [isOutput, setIsOutput] = useState(false); // 출력모드 / 입력받는 모드 전환 (조합하는 모드)
  const [cmdOutTxt, setCmdOutTxt] = useState(CommandOutputTxt); // 최종 출력 모드일 때 출력되는 텍스트

  useEffect(() => {
    setIsOutput(cmdState);
  }, []);

  return (
    <div className="">
      <h2>{cmdOutTxt}</h2>
    </div>
  );
}

export default Output;
