import React, { useState } from "react";
import LocationInput from "./LocationInput";
import DropdownFilter from "./DropdownFilter";
import DateSelector from "./DateSelector";
//import { css } from '@emotion/react';
import css from "./FilterComponent.module.css";

function FilterComponent({ handleFilterSearch }) {
  const [locationInput, setLocationInput] = useState("");
  const [dropdownInput, setdropdownInput] = useState("");

  function handleLocationChange(location) {
    setLocationInput(location);
  }
  // function handleLocationChange (location) {
  //   setLocationInput(location)
  // }
  function handleClick() {
    const inputs = {
      location: locationInput,
      type: dropdownInput,
    };
    handleFilterSearch(inputs);
  }

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
      <LocationInput handleLocationChange={handleLocationChange} />
      <DateSelector />
      <DropdownFilter />
      <button onClick={handleClick}>Search Activities</button>
    </div>
  );
}

export default FilterComponent;
