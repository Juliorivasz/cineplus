import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Content } from './FolderList';

interface StateModal {
    open: boolean;
    setOpen: (value: boolean) => void;
    content: Content;
}

export const ModalContent = ({open, setOpen, content}:StateModal) => {

  const {title, image, year, gender, synopsis, cast, duration} = content;


    const closePreview = () => {
        setOpen(false);
      };


  return (
    <Dialog open={open} onClose={closePreview} maxWidth="md" fullWidth>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <Box
        component="img"
        sx={{
          width: '100%',
          maxHeight: '300px',
          objectFit: 'contain',
          marginBottom: '20px'
        }}
        alt={title}
        src={image}
      />
      <Typography variant="body1"><strong>Año:</strong> {year}</Typography>
      <Typography variant="body1"><strong>Género:</strong> {gender}</Typography>
      <Typography variant="body1"><strong>Sinopsis:</strong> {synopsis}</Typography>
      <Typography variant="body1"><strong>Reparto:</strong> {cast}</Typography>
      <Typography variant="body1"><strong>Duración:</strong> {duration} minutos</Typography>
    </DialogContent>
    <Button onClick={closePreview} color="primary" variant="contained" sx={{ margin: '20px' }}>
      Cerrar
    </Button>
  </Dialog>
  )
}
