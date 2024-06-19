import "./App.css";

import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Clock from "react-live-clock";

// color
import ColorFolder from "./data/ColorFolder";

// data
import tool_type from "./data/tool_type";
import tool_material from "./data/tool_material";
import enchant_list from "./data/enchant_list";

// screen
import Headers from "./screen/Headers";
import Output from "./screen/Output";
import PrintArray from "./modules/PrintArray";

// modules

// variables
const TIMEZONE = "Asia/Seoul";

function App() {
  const [isOutput, setIsOutput] = useState(false); // 출력모드 / 입력받는 모드 전환 (조합하는 모드)
  const [toolMaterial, setToolMaterial] = useState(tool_material);
  const [toolType, setToolType] = useState(tool_type);
  const [enchantList, setToolEnchant] = useState(enchant_list);
  const [outText, setOutText] = useState(["COMMAND", "OUTPUT", "AREA"]);

  const [viewMaterial, setViewMaterial] = useState([]);
  const [viewTool, setViewTool] = useState([]);
  const [viewEnchant, setViewEnchant] = useState([]);

  useEffect(() => {}, []);

  // click
  const handleClickType = (e) => {
    console.log(e.target.textContent);
    setViewTool([e.target.textContent]);
  };
  const handleClickMaterial = (e) => {
    console.log(e.target.textContent);
    setViewMaterial([e.target.textContent]);
  };
  const handleClickEnchant = (e) => {
    let item = e.target.textContent;
    console.log(item);

    // 중복된 항목이라면 추가하지 않음
    // if (!viewEnchant.includes(item)) setViewEnchant([...viewEnchant, item]);

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

  return (
    <Container>
      <div className="App">
        <Headers />
        <span>BODY AREA</span>
        <Output
          cmdState={isOutput}
          CommandOutputTxt={outText}
          viewMaterial={viewMaterial}
          viewTool={viewTool}
          viewEnchant={viewEnchant}
          onItemClick={handleItemClick}
        />

        <BtnContainer>
          <div className="btn-container">
            <div className="btn-sub-container">
              <button onClick={handleClearMat}>Clear Material</button>
              <button onClick={handleClearType}>Clear Type</button>
              <button onClick={handleClearEnch}>Clear Element</button>
            </div>
            <button onClick={handleClear}>Clear ALL</button>
            <button className="submit">Create Command!</button>
          </div>
        </BtnContainer>

        <FilterContainer>
          <div className="filter-container">
            <div class="chkbox-container">
              <span className="chkbox-title">Enchant Filter</span>
              <input
                type="radio"
                id="chkbox1"
                name="enchant-filter"
                className="chkbox1"
                defaultChecked
              />
              <label for="chkbox1" className="chkbox-label">
                Survival Max
              </label>
              <input
                type="radio"
                id="chkbox2"
                name="enchant-filter"
                className="chkbox2"
              />
              <label for="chkbox2" className="chkbox-label">
                up to 10
              </label>
              <input
                type="radio"
                id="chkbox3"
                name="enchant-filter"
                className="chkbox3"
              />
              <label for="chkbox3" className="chkbox-label">
                up to 100
              </label>
              <input
                type="radio"
                id="chkbox4"
                name="enchant-filter"
                className="chkbox4"
              />
              <label for="chkbox4" className="chkbox-label">
                Infinite
              </label>
            </div>
          </div>
        </FilterContainer>

        <PrintArray
          toolType={toolType}
          toolMaterial={toolMaterial}
          enchantList={enchantList}
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
    border: 5px solid #f00;
    margin-bottom: ${MGinBottom}px;
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
  border: 5px solid #00f;

  margin-bottom: ${MGinBottom}px;

  .chkbox-title {
    font-size: 25px;
  }

  input {
    margin-left: 20px;
  }
`;

export default App;
