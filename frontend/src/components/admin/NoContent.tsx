import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface NoContentProps {
  message: string;
}

const NoContent: React.FC<NoContentProps> = ({ message }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200); // Mostrar después de 1 segundo

    return () => clearTimeout(timer); // Limpiar el temporizador en desmontaje
  }, []);

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
        opacity: show ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
      }}
    >
      <Typography variant="h6" color="textSecondary">
        {message}
      </Typography>
    </Box>
  );
};

export default NoContent;

