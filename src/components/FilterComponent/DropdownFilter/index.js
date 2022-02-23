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
    <Box sx={{ maxWidth: 500 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Activity Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Activity Type"
          onChange={handleChange}
        >
          <MenuItem value={"walk"}>walk</MenuItem>
          <MenuItem value={"film"}>film</MenuItem>
          <MenuItem value={"cafe"}>cafe</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
