import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { InputAdornment } from "@mui/material"


export default function SelectTheme({handleChange, post}) {
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <Box sx={{ minWidth: 120 }} className="margin-ten new-blog-entry">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" >Select a Topic</InputLabel>
        <Select
          name="theme"
          className="rounded-btn"
          labelId="demo-simple-select-label"
          value={post.theme}
          label="Select a Topic"
          onChange={handleChange}
              // InputProps={{
              //   startAdornment: (
              //       <InputAdornment position="start">
              //           <FilterAltIcon />
              //       </InputAdornment>
              //   ),
              //   }}
        >
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