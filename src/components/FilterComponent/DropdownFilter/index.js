import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropdownFilter() {
  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box style={{ margin: "1rem" }}>
      <FormControl fullWidth sx={{ width: 200 }}>
        <InputLabel id="demo-simple-select-label">Activity Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Activity Type"
          onChange={handleChange}
        >
          <MenuItem value={"arts/crafts"}>Arts/Crafts</MenuItem>
          <MenuItem value={"cafe"}>Cafe</MenuItem>
          <MenuItem value={"cinema"}>Cinema</MenuItem>
          <MenuItem value={"cycle"}>Cycle</MenuItem>
          <MenuItem value={"gallery"}>Gallery</MenuItem>
          <MenuItem value={"gallery"}>Karaoke</MenuItem>
          <MenuItem value={"museum"}>Museum</MenuItem>
          <MenuItem value={"restaurant"}>Restaurant</MenuItem>
          <MenuItem value={"run"}>Run</MenuItem>
          <MenuItem value={"swim"}>Swim</MenuItem>
          <MenuItem value={"tennis"}>Tennis</MenuItem>
          <MenuItem value={"theatre"}>Theatre</MenuItem>
          <MenuItem value={"walk"}>Walk</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
