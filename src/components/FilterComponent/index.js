import React, { useState } from "react";
import LocationInput from "./LocationInput";
import DateSelector from "./DateSelector";
import css from "./FilterComponent.module.css";

function FilterComponent({ handleFilterSearch }) {
  const [locationInput, setLocationInput] = useState("");
  const [dropdownInput, setDropdownInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  function handleLocationChange(location) {
    setLocationInput(location);
  }
  function handleDropdownChange(type) {
    setDropdownInput(type);
  }

  function handleDateChange(date) {
    setDateInput(date);
  }

  function handleClick() {
    try {
      let formattedDate = "";
      if (dateInput !== "") {
        const date = new Date(dateInput);
        formattedDate = date.toISOString().slice(0, 10);
      }
      const inputs = {
        location: locationInput,
        type: dropdownInput,
        date: formattedDate,
      };
      handleFilterSearch(inputs);
    } catch {
      alert("invalid date");
    }
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
      <DateSelector handleDateChange={handleDateChange} />
      <div className={`${css.inputContainer} flex-vertical`}>
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
        <button className={css.btn} onClick={handleClick}>
          Apply filters
        </button>
      </div>
    </div>
  );
}

export default FilterComponent;
