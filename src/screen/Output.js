import { React, useState, useEffect } from "react";
import styled from "styled-components";

// color
import ColorFolder from "../data/ColorFolder";

import Variable from "../data/data";

function Output({
  cmdState,
  CommandOutputTxt,
  viewTool,
  viewMaterial,
  viewEnchant,
}) {
  const [isOutput, setIsOutput] = useState(false); // 출력모드 / 입력받는 모드 전환 (조합하는 모드)
  const [cmdOutTxt, setCmdOutTxt] = useState(CommandOutputTxt); // 최종 출력 모드일 때 출력되는 텍스트

  useEffect(() => {
    setIsOutput(cmdState);
  }, []);

  return (
    // <div className="">
    //   <h2>COMMAND OUTPUT AREA</h2>
    // </div>
    <GridContainer>
      <GridItem>{Variable.str_front}</GridItem>
      <GridItem>
        <ul>
          {viewMaterial.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </GridItem>
      <GridItem>
        <ul>
          {viewTool.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </GridItem>
      <GridItem>
        <ul>
          {viewEnchant.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </GridItem>
    </GridContainer>
  );
}

// Grid 컨테이너 스타일 정의
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4개의 열로 구성된 그리드 */
  gap: 10px; /* 그리드 항목 사이의 간격 */
  padding: 20px;
`;

// Grid 아이템 스타일 정의
const GridItem = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
  text-align: center;
`;

export default Output;
