import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/admin/home');
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<ArrowBackIcon />}
      onClick={handleBackClick}
      sx={{
        position: 'absolute',
        top: '10%', // Ajusta este valor según la altura de tu barra de navegación
        left: '10%', // Ajusta el margen izquierdo según sea necesario
        zIndex: 2, // Asegura que el botón esté sobre otros elementos
      }}
    >
      Regresar
    </Button>
  );
};

export default BackButton;
