import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface NoContentProps {
  message: string;
}

const NoContent: React.FC<NoContentProps> = ({ message }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h6" color="textSecondary">
        {message}
      </Typography>
    </Box>
  );
};

export default NoContent;
