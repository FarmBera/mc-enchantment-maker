import { React } from "react";
import styled from "styled-components";

import { UnselectableTxt } from "../styles/Unselectable";

// variables
// const l = (msg) => console.log(msg);

function Buttons({
  handleClearMat,
  handleClearType,
  handleClearEnch,
  handleClear,
  handleClickCreate,
}) {
  return (
    <BtnContainer>
      <div className="btn-container">
        <div className="btn-sub-container">
          <button onClick={handleClearMat}>
            <UnselectableTxt>Clear Material</UnselectableTxt>
          </button>
          <button onClick={handleClearType}>
            <UnselectableTxt>Clear Type</UnselectableTxt>
          </button>
          <button onClick={handleClearEnch}>
            <UnselectableTxt>Clear Element</UnselectableTxt>
          </button>
        </div>
        <button onClick={handleClear}>
          <UnselectableTxt>Clear ALL</UnselectableTxt>
        </button>
        <button className="submit" onClick={handleClickCreate}>
          <UnselectableTxt>Create Command!</UnselectableTxt>
        </button>
      </div>
    </BtnContainer>
  );
}

// style variables
const MGinBottom = 10;

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

export default Buttons;
