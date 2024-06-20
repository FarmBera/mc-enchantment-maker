import "./App.css";

import { React, useState, useEffect } from "react";
import styled from "styled-components";

// color
import ColorFolder from "./data/ColorFolder";

// data
import tool_type from "./data/tool_type";
import tool_material from "./data/tool_material";
import enchant_list from "./data/enchant_list";

// screen
import Headers from "./screen/Headers";
import Output from "./screen/Output";
import PrintArray from "./screen/PrintArray";
import Variable from "./data/data";
import Modal from "./screen/Modal";

// modules

const l = (msg) => console.log(msg);

// variables
const TIMEZONE = "Asia/Seoul";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("null");
  const [modalMessage, setModalMessage] = useState("null");
  const [modalDuration, setModalDuration] = useState(3);
  const [modalImage, setModalImage] = useState("");
  // const [modalColor, setModalColor] = useState("#f00");
  const handleShowModal = (title = "Alert !", message, duration, image) => {
    setModalTitle(title);
    setModalMessage(message);
    setModalDuration(duration);
    // let RESULT_STR ="enchanted_" + viewMaterial[0]? `${viewMaterial[0]}_`: "" + `${viewTool[0]}`;
    let RESULT_STR = "";
    RESULT_STR += viewEnchant.length === 0 ? "" : "enchanted_";
    RESULT_STR += viewMaterial[0] ? `${viewMaterial[0]}_` : "";
    RESULT_STR += `${viewTool[0]}`;
    // l(RESULT_STR);
    setModalImage(RESULT_STR);
    // setModalColor();
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [viewMaterial, setViewMaterial] = useState([]);
  const [viewTool, setViewTool] = useState([]);
  const [viewEnchant, setViewEnchant] = useState([]);

  const [filter, setFilter] = useState({
    chkbox1: true,
    chkbox2: false,
    chkbox3: false,
    chkbox4: false,
  });

  // useEffect(() => {}, []);

  // click
  const handleClickType = (e) => {
    // console.log(e.target.textContent);
    setViewTool([e.target.textContent]);
  };
  const handleClickMaterial = (e) => {
    // console.log(e.target.textContent);
    setViewMaterial([e.target.textContent]);
  };
  const handleClickEnchant = (e) => {
    let item = e.target.textContent;
    // console.log(item);

    // 중복 항목이라면 추가하지 않음
    if (!viewEnchant.includes(item)) setViewEnchant([...viewEnchant, item]);

    // 배열에 항목이 존재하는지 여부
    if (viewEnchant.includes(item))
      // 이미 배열에 있는 항목이면 제거
      setViewEnchant(viewEnchant.filter((enchant) => enchant !== item));
    else {
      // 배열에 없는 항목이면 추가
      setViewEnchant([...viewEnchant, item]);
    }
  };

  // clear
  const handleClearMat = () => {
    setViewMaterial([]);
  };
  const handleClearType = () => {
    setViewTool([]);
  };
  const handleClearEnch = () => {
    setViewEnchant([]);
  };
  const handleClear = () => {
    setViewTool([]);
    setViewMaterial([]);
    setViewEnchant([]);
  };
  // 명령어 생성하기 (처리, 클립보드에 복사)
  const handleClickCreate = async () => {
    let item;
    let RESULT_STR = `${Variable.str_front}`;

    // 선택한 Tool 이 아무것도 없다면
    if (viewTool.length === 0) {
      const msg = "Please select tool";
      handleShowModal(`Select Tool`, `Please select tool.`, 3, "barrier");
      return;
    }

    // 재료가 와야하는 Tool 이라면
    item = tool_type.find((item) => item.name === viewTool[0]);
    if (item && !item.stand_alone && viewMaterial.length === 0) {
      handleShowModal(
        "Please select material.",
        "This tool can't be stand-alone. \nSelect with material required.",
        3,
        "barrier"
      );
      return;
    }

    // 재료 명령어 생성 (재료 필요없는거는 재료 없이 적용)
    RESULT_STR += item.stand_alone
      ? `${item.name}`
      : `${viewMaterial[0]}_${item.name}`;

    // 인첸트 처리 시작

    let CUSTOM_ENCHANT = []; // 인첸트 항목 저장할 배열

    // 저장된 인첸트 항목 command 뽑아오기
    for (let i = 0; i < viewEnchant.length; i++) {
      let itemName = viewEnchant[i];
      let item = enchant_list.find((enchant) => enchant.name === itemName);
      CUSTOM_ENCHANT.push(item.origin);
    }

    // 인첸트된 항목이 없다면
    if (CUSTOM_ENCHANT.length === 0) {
      l(`No Enchant`);
    } else {
      // 최종 복사할 string 생성
      RESULT_STR += `${Variable.str_second}${CUSTOM_ENCHANT.join(",")}${
        Variable.str_end
      }`;
    }

    // 클립보다 복사 과정
    l(RESULT_STR);
    try {
      await navigator.clipboard.writeText(RESULT_STR);
      handleShowModal(`Copied to Clipboard`, `${RESULT_STR}`, 3);
      // alert(`Copied to Clipboard\n${RESULT_STR}`);
    } catch (e) {
      handleShowModal(
        `Copy Failed!`,
        `Safari doesn't support clipboard copy!\n${e}`,
        3
      );
      // alert(`Copy Failed!\n\n${RESULT_STR}\n${e}`);
    }
  };
  // Output.js item clear
  const handleItemClick = (item, type) => {
    if (type === "tool") {
      setViewTool(viewTool.filter((tool) => tool !== item));
    } else if (type === "material") {
      setViewMaterial(viewMaterial.filter((material) => material !== item));
    } else if (type === "enchant") {
      setViewEnchant(viewEnchant.filter((enchant) => enchant !== item));
    }
  };

  // 필터 변경 처리
  const handleFilterChange = (e) => {
    // console.log(`${filter.chkbox1}, ${filter.chkbox2}, ${filter.chkbox3}, ${filter.chkbox4}`);
    const { id, checked } = e.target;
    setFilter({ ...filter, [id]: checked });
    // console.log(`${filter.chkbox1}, ${filter.chkbox2}, ${filter.chkbox3}, ${filter.chkbox4}`);
  };

  // 필터링된 인첸트 가져오기
  const getFilteredEnchantments = () => {
    return enchant_list.filter((enchant) => {
      if (filter.chkbox1 && enchant.name === enchant.id) return true;
      if (filter.chkbox2 && enchant.name !== enchant.id && enchant.lvl <= 10)
        return true;
      if (filter.chkbox3 && enchant.lvl > 10 && enchant.lvl <= 100) return true;
      if (filter.chkbox4 && enchant.lvl > 100) return true;
      return false;
    });
  };

  const imageNameProcessing = () => {};

  return (
    <Container>
      <div className="App">
        {/* 팝업을 위한 Modal Components */}
        <Modal
          show={showModal}
          onClose={handleCloseModal}
          title={modalTitle}
          message={modalMessage}
          duration={modalDuration} // n초 후에 자동으로 닫힘
          image={modalImage}
        />
        {/* Header Area */}
        {/* <Headers /> */} {/* TODO: 주석 해제할 것 */}
        {/* BODY AREA */}
        <Output
          // CommandOutputTxt={outText}
          viewMaterial={viewMaterial}
          viewTool={viewTool}
          viewEnchant={viewEnchant}
          onItemClick={handleItemClick}
        />
        {/*  */}
        <BtnContainer>
          <div className="btn-container">
            <div className="btn-sub-container">
              <button onClick={handleClearMat}>Clear Material</button>
              <button onClick={handleClearType}>Clear Type</button>
              <button onClick={handleClearEnch}>Clear Element</button>
            </div>
            <button onClick={handleClear}>Clear ALL</button>
            <button className="submit" onClick={handleClickCreate}>
              Create Command!
            </button>
          </div>
        </BtnContainer>
        {/*  */}
        <FilterContainer>
          <div className="filter-container">
            <div className="chkbox-container">
              <span className="chkbox-title">Enchant Filter</span>
              <input
                type="checkbox"
                id="chkbox1"
                className="chkbox1"
                checked={filter.chkbox1}
                onChange={handleFilterChange}
              />
              <label htmlFor="chkbox1" className="chkbox-label">
                Survival Max
              </label>
              <input
                type="checkbox"
                id="chkbox2"
                className="chkbox2"
                checked={filter.chkbox2}
                onChange={handleFilterChange}
              />
              <label htmlFor="chkbox2" className="chkbox-label">
                up to 10
              </label>
              <input
                type="checkbox"
                id="chkbox3"
                className="chkbox3"
                checked={filter.chkbox3}
                onChange={handleFilterChange}
              />
              <label htmlFor="chkbox3" className="chkbox-label">
                up to 100
              </label>
              <input
                type="checkbox"
                id="chkbox4"
                className="chkbox4"
                checked={filter.chkbox4}
                onChange={handleFilterChange}
              />
              <label htmlFor="chkbox4" className="chkbox-label">
                Infinite
              </label>
            </div>
          </div>
        </FilterContainer>
        {/*  */}
        <PrintArray
          toolType={tool_type}
          toolMaterial={tool_material}
          enchantList={getFilteredEnchantments()}
          handleClickType={handleClickType}
          handleClickMaterial={handleClickMaterial}
          handleClickEnchant={handleClickEnchant}
        />
      </div>
    </Container>
  );
}

// style variables
const MGinBottom = 10;

const Container = styled.div``;

const BtnContainer = styled.div`
  button {
    margin-left: 10px;
    margin-bottom: ${MGinBottom}px;
    height: 30px;
  }

  button.submit {
    width: 150px;
    height: 40px;
  }

  .btn-container {
    /* border: 5px solid #f00; */
    /* margin-bottom: ${MGinBottom}px; */
  }

  .btn-sub-container {
    button {
      /* background-color: #0f0; */
    }
  }
`;

const FilterContainer = styled.div`
  /* width: 100%; */
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 5px solid #00f; */

  margin-bottom: ${MGinBottom}px;

  .chkbox-title {
    font-size: 25px;
  }

  input {
    margin-left: 20px;
  }
`;

export default App;
