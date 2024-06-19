import "./App.css";

import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Clock from "react-live-clock";

// color
import ColorFolder from "./data/ColorFolder";

// data
import tool_type from "./data/tool_type";
import tool_shape from "./data/tool_shape";
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
  const [toolType, setToolType] = useState(tool_type);
  const [toolShape, setToolShape] = useState(tool_shape);
  const [enchantList, setEnchantList] = useState(enchant_list);
  const [outText, setOutText] = useState("COMMAND OUTPUT AREA");

  useEffect(() => {}, []);

  return (
    <Container>
      <div className="App">
        <Headers />
        <span>BODY AREA</span>
        <Output cmdState={isOutput} CommandOutputTxt={outText} />

        <BtnContainer>
          <div className="btn-container">
            <div className="btn-sub-container">
              <button>Clear Type</button>
              <button>Clear Material</button>
              <button>Clear Element</button>
            </div>
            <button>Clear ALL</button>
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
          toolShape={toolShape}
          enchantList={enchantList}
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
