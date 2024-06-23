import { React } from "react";
import styled from "styled-components";

import { UnselectableTxt } from "../styles/Unselectable";

function Filter({ filter, handleFilterChange }) {
  // useEffect(() => {}, []);

  return (
    <div>
      <FilterContainer>
        <div className="filter-container">
          <div className="chkbox-container">
            <UnselectableTxt>
              <span className="chkbox-title">Enchant Filter</span>
            </UnselectableTxt>
            <input
              type="checkbox"
              id="chkbox1"
              className="chkbox1"
              checked={filter.chkbox1}
              onChange={handleFilterChange}
            />
            <label htmlFor="chkbox1" className="chkbox-label">
              <UnselectableTxt>Survival Max</UnselectableTxt>
            </label>
            <input
              type="checkbox"
              id="chkbox2"
              className="chkbox2"
              checked={filter.chkbox2}
              onChange={handleFilterChange}
            />
            <label htmlFor="chkbox2" className="chkbox-label">
              <UnselectableTxt>up to 10</UnselectableTxt>
            </label>
            <input
              type="checkbox"
              id="chkbox3"
              className="chkbox3"
              checked={filter.chkbox3}
              onChange={handleFilterChange}
            />
            <label htmlFor="chkbox3" className="chkbox-label">
              <UnselectableTxt>up to 100</UnselectableTxt>
            </label>
            <input
              type="checkbox"
              id="chkbox4"
              className="chkbox4"
              checked={filter.chkbox4}
              onChange={handleFilterChange}
            />
            <label htmlFor="chkbox4" className="chkbox-label">
              <UnselectableTxt>Infinite</UnselectableTxt>
            </label>
          </div>
        </div>
      </FilterContainer>
    </div>
  );
}

const MGinBottom = 10;

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

export default Filter;
