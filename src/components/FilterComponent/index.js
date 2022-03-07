import React from "react";
import LocationInput from "./LocationInput";
import DropdownFilter from "./DropdownFilter";
import DateSelector from "./DateSelector";
//import { css } from '@emotion/react';
import css from "./FilterComponent.module.css";

function FilterComponent() {
  return (
    <div
      className={css.filterContainer}
      // style={{
      //     display: 'grid',
      //     gridTemplateColumns: 'repeat(3, 1fr)',
      //     gridGap: '1rem',
      //     margin: '20px',
      //     padding: '10px',
      // }}
    >
      <LocationInput />
      <DateSelector />
      <DropdownFilter />
      <button>Search Activities</button>
    </div>
  );
}

export default FilterComponent;
