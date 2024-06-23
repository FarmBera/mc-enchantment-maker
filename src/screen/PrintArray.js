import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Clock from "react-live-clock";

// modeuls
import Image from "../modules/Image";
import { UnselectableTxt } from "../styles/Unselectable";

function PrintArray({
  toolType,
  toolMaterial,
  enchantList,
  handleClickType,
  handleClickMaterial,
  handleClickEnchant,
}) {
  const imgWidth = 20;

  return (
    <div className="PrintArray">
      <OuterContainer>
        <InnerContainer>
          <Column>
            <span className="elementTitle">
              <UnselectableTxt>Material</UnselectableTxt>
            </span>
            <ul>
              {toolMaterial.map((item, index) => (
                <li key={item} onClick={handleClickMaterial}>
                  <Image name={item} />
                  <span>
                    <UnselectableTxt>{item}</UnselectableTxt>
                  </span>
                </li>
              ))}
            </ul>
          </Column>

          <Column>
            <span className="elementTitle">
              <UnselectableTxt>Tool Type</UnselectableTxt>
            </span>
            <ul>
              {toolType.map((item, index) => (
                <li key={index} onClick={handleClickType}>
                  <Image name={item.name} />
                  <span>
                    <UnselectableTxt>{item.name}</UnselectableTxt>
                  </span>
                </li>
              ))}
            </ul>
          </Column>

          <Column>
            <span className="elementTitle">
              <UnselectableTxt>Enchantments</UnselectableTxt>
            </span>
            <ul>
              {enchantList.length === 0 ? (
                <span>Please select Filter!</span>
              ) : (
                enchantList.map((item, index) => (
                  <li key={index} onClick={handleClickEnchant}>
                    <Image name="enchanted_book" ext="gif" />
                    <span>
                      <UnselectableTxt>{item.name}</UnselectableTxt>
                    </span>
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
  /* text-decoration: none; */
  display: flex;
  width: 800px;
  text-align: center;
  justify-content: space-around; /* 각 컬럼 간 간격을 균등하게 */
  /* border: 10px solid #f00; */
`;

const Column = styled.div`
  /* text-decoration: none; */
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  width: 50px;
  /* height: 150px; */
  justify-content: center;
  align-items: center;
  text-align: center;

  .elementTitle {
    font-size: 25px;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }

  &.li {
    text-decoration: none;
    /* background-color: #ff0; */
  }
  li:hover {
    /* text-decoration: none; */
    background-color: #999;
  }
  li:active {
    background-color: #0ff;
  }

  ul {
    list-style-type: none; // 리스트 점 제거
    padding: 0; // 기본 패딩 제거
    margin: 0; // 기본 마진 제거
    text-align: center;
    margin-top: 20px;
  }

  li {
    display: flex; // 이미지와 텍스트를 나란히 배치
    align-items: center; // 수직 정렬
    cursor: pointer; // 클릭 가능한 커서 표시

    &:hover {
      // 호버 효과 추가 가능
    }

    span {
      margin-left: 8px; // 이미지와 텍스트 사이의 간격 조절
    }
  }
`;

export default PrintArray;
