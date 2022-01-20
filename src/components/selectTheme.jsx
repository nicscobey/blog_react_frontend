import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectTheme({handleChange, post}) {
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <Box sx={{ minWidth: 120 }} className="margin-ten new-blog-entry">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select a Topic</InputLabel>
        <Select
          name="theme"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={post.theme}
          label="Select a Topic"
          onChange={handleChange}
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