import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Clock from "react-live-clock";

// color
import ColorFolder from "../data/ColorFolder";
import diamond from "../icon/diamond.png";

// require.context를 사용하여 해당 디렉토리의 모든 이미지를 가져옵니다.
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

// '../icon' 경로에서 모든 이미지를 가져옵니다.
const images = importAll(
  require.context("../icon", false, /\.(png|jpe?g|gif)$/)
);

function Image({ name }) {
  const imgWidth = 20;

  const image = images[name];

  // console.log(image);

  return (
    <span>
      {image ? (
        <img src={image.default} width={imgWidth} alt={name} />
      ) : (
        <p>Image not found</p>
      )}
    </span>
  );
}

function PrintArray({
  toolType,
  toolMaterial,
  enchantList,
  handleClickType,
  handleClickMaterial,
  handleClickEnchant,
}) {
  // const [toolType, setToolType] = useState([tool_type]);

  // console.log(images);

  const imgWidth = 20;

  return (
    <div className="PrintArray">
      <OuterContainer>
        <InnerContainer>
          <Column>
            <span>Tool Material</span>
            <ul>
              {toolMaterial.map((item, index) => (
                <li key={index}>
                  <Image name={`${item}.png`} />
                  {/* <img src="../icon/emerald.png" width={imgWidth} /> */}
                  <span onClick={handleClickMaterial}>{item}</span>
                </li>
              ))}
            </ul>
          </Column>

          <Column>
            <span>Tool Type</span>
            <ul>
              {toolType.map((item, index) => (
                <li key={index}>
                  <img src={diamond} width={imgWidth} />
                  <span onClick={handleClickType}>{item}</span>
                </li>
              ))}
            </ul>
          </Column>

          <Column>
            <span>Enchantments</span>
            <ul>
              {enchantList.length === 0 ? (
                <span>Please select Filter!</span>
              ) : (
                enchantList.map((item, index) => (
                  <li key={index}>
                    <img src={diamond} width={imgWidth} />
                    <span onClick={handleClickEnchant}>{item.name}</span>
                  </li>
                ))
              )}
            </ul>
          </Column>
        </InnerContainer>
      </OuterContainer>
    </div>
  );
}

const OuterContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
`;

const InnerContainer = styled.div`
  display: flex;
  width: 900px;
  text-align: center;
  justify-content: space-around; /* 각 컬럼 간 간격을 균등하게 */
  /* border: 10px solid #f00; */
`;

const Column = styled.div`
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  width: 50px;
  /* height: 150px; */
  justify-content: center;
  align-items: center;
  text-align: center;

  &:not(:last-child) {
    margin-right: 10px;
  }

  li > span {
    /* background-color: #ff0; */
  }
  li > span:hover {
    background-color: #999;
  }
  li > span:active {
    background-color: #0ff;
  }
`;
