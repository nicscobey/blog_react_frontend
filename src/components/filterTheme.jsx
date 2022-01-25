import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { InputAdornment } from "@mui/material"
import { styled } from '@mui/material/styles';


// const RoundedBox = styled(Box)(({ theme }) => ({
//   borderRadius: "100px",
// }));

export default function FilterTheme({handleChange, filter, icon}) {
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <Box sx={{ width: 226, borderRadius: "100px" }} className="margin-ten full-width white-bg-br rounded-btn" >
      <FormControl size="small" className="full-width">
        {/* <InputLabel id="filter-theme-label" >Filter by Theme</InputLabel> */}
        <FilterAltIcon id="filter-icon" className={filter === "" ? "no-filter-response" : ""}/>
        <Select
          name="filter"
          displayEmpty="true"
          // labelId="filter-theme-label"
          id="filter-theme"
          value={filter}
          // label="Filter by Theme"
          // placeholder="hi"
          className={filter === "" ? "no-filter-response rounded-btn" : "rounded-btn"}
          onChange={handleChange}
              // InputProps={{
              //   startAdornment: (
              //       <InputAdornment position="start">
              //           <FilterAltIcon />
              //       </InputAdornment>
              //   ),
              //   }}
          
        >
          <MenuItem value={""} className="no-filter-response">No Filter</MenuItem>
          <MenuItem value={"CSS"}>CSS</MenuItem>
          <MenuItem value={"HTML"}>HTML</MenuItem>
          <MenuItem value={"JavaScript"}>JavaScript</MenuItem>
          <MenuItem value={"Python"}>Python</MenuItem>
          <MenuItem value={"React"}>React</MenuItem>
          <MenuItem value={"Ruby"}>Ruby</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}