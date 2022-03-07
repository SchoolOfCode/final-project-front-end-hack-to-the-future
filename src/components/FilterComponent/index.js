import React, { useState } from "react";
import LocationInput from "./LocationInput";
//import DropdownFilter from "./DropdownFilter";
import DateSelector from "./DateSelector";
//import { css } from '@emotion/react';
import css from "./FilterComponent.module.css";

function FilterComponent({ handleFilterSearch }) {
  const [locationInput, setLocationInput] = useState("");
  const [dropdownInput, setDropdownInput] = useState("");

  function handleLocationChange(location) {
    setLocationInput(location);
  }
  function handleDropdownChange(type) {
    setDropdownInput(type);
  }
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
      {/* <DropdownFilter /> */}
      <select
        className={css.input}
        id="activityTypeFilter"
        name="activityTypeFilter"
        defaultValue=""
        required
        onChange={(e) => handleDropdownChange(e.target.value)}
      >
        <option value="">--Please choose an activity type--</option>
        <option value="arts/crafts">Arts/Crafts</option>
        <option value="cafe">Cafe</option>
        <option value="cinema">Cinema</option>
        <option value="cycle">Cycle</option>
        <option value="gallery">Gallery</option>
        <option value="karaoke">Karaoke</option>
        <option value="museum">Museum</option>
        <option value="restaurant">Restaurant</option>
        <option value="run">Run</option>
        <option value="swim">Swim</option>
        <option value="tennis">Tennis</option>
        <option value="theatre">Theatre</option>
        <option value="walk">Walk</option>
        <option value="other">Other</option>
      </select>
      <button className="btn" onClick={handleClick}>
        Search Activities
      </button>
    </div>
  );
}

export default FilterComponent;
