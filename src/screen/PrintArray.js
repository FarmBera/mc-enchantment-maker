import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Clock from "react-live-clock";

// color
import ColorFolder from "../data/ColorFolder";
import diamond from "../icon/diamond.png";

// modeuls
import Image from "../modules/Image";

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
                <li key={item} onClick={handleClickMaterial}>
                  <Image name={item} />
                  {/* <img src={diamond} width={imgWidth} /> */}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Column>

          <Column>
            <span>Tool Type</span>
            <ul>
              {toolType.map((item, index) => (
                <li key={index} onClick={handleClickType}>
                  <Image name={item.name} />
                  <span>{item.name}</span>
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
                  <li key={index} onClick={handleClickEnchant}>
                    <Image name="enchanted_book" ext="gif" />
                    <span>{item.name}</span>
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
  text-decoration: none;
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

  li {
    /* background-color: #ff0; */
  }
  li:hover {
    background-color: #999;
  }
  li:active {
    background-color: #0ff;
  }
`;

export default PrintArray;
