import "./App.css";

import { React, useState /* useEffect */ } from "react";
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
import Buttons from "./screen/Buttons";
import Filter from "./screen/Filter";
import Footers from "./screen/Footers";

// modules

// variables
const l = (msg) => console.log(msg);

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("null");
  const [modalMessage, setModalMessage] = useState("null");
  const modalDuration = 10;
  // const [modalDuration, setModalDuration] = useState(10);
  const [modalImage, setModalImage] = useState("");
  const [modalColor, setModalColor] = useState(ColorFolder.white);

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

  const handleShowModal = (
    title = modalTitle,
    message = modalTitle,
    txtColor = ColorFolder.red,
    image
    // duration = modalDuration
  ) => {
    setModalTitle(title);
    setModalMessage(message);
    setModalColor(txtColor);

    if (image) {
      setModalImage(image);
    } else {
      let RESULT_STR = "";
      RESULT_STR += viewEnchant.length === 0 ? "" : "enchanted_";
      RESULT_STR += viewMaterial[0] ? `${viewMaterial[0]}_` : "";
      RESULT_STR += `${viewTool[0]}`;
      setModalImage(RESULT_STR);
    }

    // setModalDuration(duration);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // 하단 항목 클릭 시,
  const handleClickType = (e) => setViewTool([e.target.textContent]);
  const handleClickMaterial = (e) => setViewMaterial([e.target.textContent]);
  const handleClickEnchant = (e) => {
    let item = e.target.textContent;
    l(e.target.id);

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

  // 초기화 handle
  const handleClearMat = () => setViewMaterial([]);
  const handleClearType = () => setViewTool([]);
  const handleClearEnch = () => setViewEnchant([]);
  const handleClear = () => {
    setViewTool([]);
    setViewMaterial([]);
    setViewEnchant([]);
  };

  // 명령어 생성 버튼 (처리, 클립보드에 복사)
  const handleClickCreate = async () => {
    let item;
    let RESULT_STR = `${Variable.str_front}`;

    // 선택한 Tool 이 아무것도 없다면
    if (viewTool.length === 0) {
      handleShowModal(
        `Select Tool`,
        `Please select tool`,
        ColorFolder.red,
        "barrier"
      );
      return;
    }

    // Tool 찾기
    item = tool_type.find((item) => item.name === viewTool[0]);

    // 재료 필요한 tool 인데, 선택 안함
    if (item && !item.stand_alone && viewMaterial.length === 0) {
      handleShowModal(
        "Select Material",
        "This tool can't be stand-alone\nMaterial selection required",
        ColorFolder.red,
        "barrier"
      );
      return;
    }

    // 재료 필요없는데 선택
    if (item.stand_alone && viewMaterial.length !== 0) {
      handleShowModal(
        "Remove Material",
        "This tool can't be with material. Remove materials",
        ColorFolder.red,
        "barrier"
      );
      return;
    }

    // 재료 명령어 생성
    RESULT_STR += item.stand_alone
      ? `${item.name}` // 재료 필요 없음
      : `${viewMaterial[0]}_${item.name}`; // 재료 필요 있음

    // 인첸트 처리 시작

    let CUSTOM_ENCHANT = []; // 인첸트 항목 저장할 배열

    // 저장된 인첸트 항목 command 뽑아오기
    for (let i = 0; i < viewEnchant.length; i++) {
      let itemName = viewEnchant[i];
      let item = enchant_list.find((enchant) => enchant.name === itemName);
      CUSTOM_ENCHANT.push(item.origin);
    }

    // 인첸트된 항목이 1개 이상 있다면
    if (CUSTOM_ENCHANT.length > 0) {
      // 인첸트 커맨드 삽입
      RESULT_STR += `${Variable.str_second}${CUSTOM_ENCHANT.join(",")}${
        Variable.str_end
      }`;
    }

    // 클립보다 복사 과정
    try {
      // 복사중 메시지 (ing...)
      handleShowModal(
        `Copying to Clipboard...`,
        `${RESULT_STR}`,
        ColorFolder.orange,
        "loading"
      );
      // 클립보드 복사
      await navigator.clipboard.writeText(RESULT_STR);
      // 복사 완료 메시지
      handleShowModal(
        `Copied to Clipboard`,
        `${RESULT_STR}`,
        ColorFolder.green
      );
    } catch (e) {
      // 복사에 실패했을 때
      handleShowModal(
        `Copy Failed!`,
        `Clipboard copy supports only Chromium browser !\n${e}`,
        ColorFolder.red,
        "barrier"
      );
    }
  };

  // Output.js 에서 텍스트 클릭하면 초기화
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
    const { id, checked } = e.target;
    setFilter({ ...filter, [id]: checked });
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

  return (
    <Container>
      <div className="App">
        {/* 팝업을 위한 Modal Components */}
        <Modal
          show={showModal}
          onClose={handleCloseModal}
          title={modalTitle}
          message={modalMessage}
          color={modalColor}
          duration={modalDuration} // n초 후에 자동으로 닫힘
          image={modalImage}
        />
        {/* Header Area */}
        <Headers />
        {/* todo-delay: 주석 해제할 것 */}
        {/* BODY AREA */}
        <Output
          viewMaterial={viewMaterial}
          viewTool={viewTool}
          viewEnchant={viewEnchant}
          onItemClick={handleItemClick}
        />
        {/*  */}
        <Buttons
          handleClearMat={handleClearMat}
          handleClearType={handleClearType}
          handleClearEnch={handleClearEnch}
          handleClear={handleClear}
          handleClickCreate={handleClickCreate}
        />
        {/*  */}
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        {/*  */}
        <PrintArray
          toolType={tool_type}
          toolMaterial={tool_material}
          enchantList={getFilteredEnchantments()}
          handleClickType={handleClickType}
          handleClickMaterial={handleClickMaterial}
          handleClickEnchant={handleClickEnchant}
        />
        <Footers />
      </div>
    </Container>
  );
}

// style variables
// const MGinBottom = 10;

const Container = styled.div``;

export default App;
