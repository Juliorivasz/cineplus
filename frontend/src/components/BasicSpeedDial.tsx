import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
import EditIcon from '@mui/icons-material/Edit';

interface TC {
  typeContent: string
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

export default function BasicSpeedDial(props:TC) {
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
                url(`/admin/${props.typeContent}`);
              } else if (action.name === 'Add') {
                url(`/admin/${props.typeContent}/add`);
              } else if (action.name === 'Delete') {
                url(`/admin/${props.typeContent}/delete`);
              } else if (action.name === 'Update') {
                url(`/admin/${props.typeContent}/update`);
              }}}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
