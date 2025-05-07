import React from 'react';
import { Fab, Zoom } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const FloatingAction: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Zoom in>
      <Fab
        color="secondary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 32, right: 32, boxShadow: 6 }}
        onClick={() => navigate('/admin/new')}
      >
        <AddIcon />
      </Fab>
    </Zoom>
  );
};

export default FloatingAction;