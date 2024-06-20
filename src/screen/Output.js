import { React, useState, useEffect } from "react";
import styled from "styled-components";

// color
import ColorFolder from "../data/ColorFolder";

import Variable from "../data/data";

import diamond from "../icon/diamond.png";
import Image from "../modules/Image";

function Listed({ array, type, onItemClick, ext }) {
  return array.map((item, index) => (
    <span key={index} onClick={() => onItemClick(item, type)}>
      <Image name={type === "enchant" ? `${type}ed_book` : item} ext={ext} />
      {item}
    </span>
  ));
}

function Output({
  cmdState,
  CommandOutputTxt,
  viewTool,
  viewMaterial,
  viewEnchant,
  onItemClick,
}) {
  const [isOutput, setIsOutput] = useState(false); // 출력모드 / 입력받는 모드 전환 (조합하는 모드)
  const [cmdOutTxt, setCmdOutTxt] = useState(CommandOutputTxt); // 최종 출력 모드일 때 출력되는 텍스트

  useEffect(() => {
    setIsOutput(cmdState);
  }, []);

  const imgWidth = 25;

  return (
    // <div className="">
    //   <h2>COMMAND OUTPUT AREA</h2>
    // </div>
    <Container>
      <GridContainer>
        <GridItem>
          <Image name="barrier" size="100" />
        </GridItem>
        <GridItem className="material">
          <Listed
            array={viewMaterial}
            type="material"
            onItemClick={onItemClick}
          />
        </GridItem>
        <GridItem className="tool">
          <Listed array={viewTool} type="tool" onItemClick={onItemClick} />
        </GridItem>
        <GridItem className="enchant">
          <Listed
            array={viewEnchant}
            type="enchant"
            onItemClick={onItemClick}
            ext="gif"
          />
        </GridItem>
      </GridContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
`;

// Grid 컨테이너 스타일 정의
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px 350px; /* 4개의 고정 너비 열 설정 */
  gap: 10px; /* 그리드 항목 사이의 간격 */
  padding: 20px;
  /* 4개의 열로 구성된 그리드 */
  /* grid-template-columns: repeat(4, 1fr); */
  /* grid-template-columns: 1.5fr 1fr 1.2fr 3fr; */
  /* grid-template-columns: 150px 100px, 120px, 300px; */
  height: 160px;
  max-height: 150px;
  max-width: 1000px;
`;

// Grid 아이템 스타일 정의
const GridItem = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  padding-top: 10px;
  /* padding-bottom: 10px; */
  border: 1px solid #ccc;
  text-align: center;
  /* top: 0; */
  max-height: 120px;
  overflow: hidden;

  &.material {
    /* background-color: #0f0; */
    /* width: 90px; */
  }
  &.tool {
    /* background-color: #00f; */
  }
`;

export default Output;
