import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

interface PremiereExisting {
    data: object,
}

export default function FolderList({data}:PremiereExisting) {

  return (
    <List sx={{ width: '100%', bgcolor: 'darkgray', color:"white", borderRadius:".3em", overflow:"auto",position: 'relative',
    maxHeight: "50vh" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar src='../../julio.jpg'>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar src='../../julio.jpg'>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar src='../../julio.jpg'>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
}
