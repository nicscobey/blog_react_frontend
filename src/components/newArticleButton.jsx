import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export default function NewArticleButton() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} className="new-article-button">
      <Link to="/new">
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </Box>
  );
}