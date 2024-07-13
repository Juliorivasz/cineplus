import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
import EditIcon from '@mui/icons-material/Edit';
import MessageAlert from './MessageAlert';
import { useState } from 'react';

interface TC {
  typeContent: string;
  selectedContentId?: string | null;
  onDelete?: ( id:string ) => Promise<void>
}

const actions = [
  { icon: <DashboardIcon />, name: 'Dashboard' },
  { icon: <CreateNewFolderIcon />, name: 'Add' },
  { icon: <FolderDeleteIcon />, name: 'Delete' },
  { icon: <EditIcon />, name: 'Update' },
];
const url = (name:string) => {
  location.href = name;
}

export default function BasicSpeedDial({typeContent,selectedContentId, onDelete}:TC) {
  const [alertOpen, setAlertOpen] = useState(false);

  const handleOpenAlert = () => {
    setAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  // Elimina el contenido seleccionado, caso contrario muestra un mensaje de error
  const handleDelete = () => {
    if (selectedContentId) {
      if(onDelete) onDelete(selectedContentId);
    }else {
      handleOpenAlert();
    }
  };
  return (
    <Box sx={{ height: 0, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="access fast"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              if (action.name === 'Dashboard') {
                url(`/admin/${typeContent}`);
              } else if (action.name === 'Add') {
                url(`/admin/${typeContent}/add`);
              } else if (action.name === 'Delete') {
                handleDelete();
              } else if (action.name === 'Update') {
                url(`/admin/${typeContent}/update`);
              }}}
          />
        ))}
      </SpeedDial>
      <MessageAlert
        open={alertOpen}
        onClose={handleCloseAlert}
        title="Se produjo un error"
        message="Por favor, seleccione un contenido"
      />
    </Box>
  );
}
