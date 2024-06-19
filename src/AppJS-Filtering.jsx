import React, { useState } from "react";
import styled from "styled-components";
import Output from "./Output";

const Container = styled.div`
  padding: 20px;
`;

const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

const App = () => {
  const [filters, setFilters] = useState({
    chkbox1: true,
    chkbox2: false,
    chkbox3: false,
    chkbox4: false,
  });

  const enchantments = [
    { name: "mending", id: "mending", lvl: 1, origin: '{id:"mending",lvl:1}' },
    {
      name: "unbreaking",
      id: "unbreaking",
      lvl: 10,
      origin: '{id:"unbreaking",lvl:10}',
    },
    {
      name: "efficiency",
      id: "efficiency",
      lvl: 100,
      origin: '{id:"efficiency",lvl:100}',
    },
    {
      name: "fortune",
      id: "fortune",
      lvl: 1000,
      origin: '{id:"fortune",lvl:1000}',
    },
  ];

  const handleFilterChange = (e) => {
    const { id, checked } = e.target;
    setFilters({ ...filters, [id]: checked });
  };

  const getFilteredEnchantments = () => {
    return enchantments.filter((enchant) => {
      if (filters.chkbox1 && enchant.lvl <= 5) return true;
      if (filters.chkbox2 && enchant.lvl > 5 && enchant.lvl <= 10) return true;
      if (filters.chkbox3 && enchant.lvl > 10 && enchant.lvl <= 100)
        return true;
      if (filters.chkbox4 && enchant.lvl > 100) return true;
      return false;
    });
  };

  return (
    <Container>
      <FilterContainer>
        <div className="chkbox-container">
          <span className="chkbox-title">Enchant Filter</span>
          <input
            type="checkbox"
            id="chkbox1"
            className="chkbox1"
            checked={filters.chkbox1}
            onChange={handleFilterChange}
          />
          <label htmlFor="chkbox1" className="chkbox-label">
            Survival Max
          </label>
          <input
            type="checkbox"
            id="chkbox2"
            className="chkbox2"
            checked={filters.chkbox2}
            onChange={handleFilterChange}
          />
          <label htmlFor="chkbox2" className="chkbox-label">
            up to 10
          </label>
          <input
            type="checkbox"
            id="chkbox3"
            className="chkbox3"
            checked={filters.chkbox3}
            onChange={handleFilterChange}
          />
          <label htmlFor="chkbox3" className="chkbox-label">
            up to 100
          </label>
          <input
            type="checkbox"
            id="chkbox4"
            className="chkbox4"
            checked={filters.chkbox4}
            onChange={handleFilterChange}
          />
          <label htmlFor="chkbox4" className="chkbox-label">
            Infinite
          </label>
        </div>
      </FilterContainer>
      <Output viewEnchant={getFilteredEnchantments()} />
    </Container>
  );
};
