import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

interface Content {
  title: string;
  image: string;
  year: string;
}

interface FolderListProps {
  content: Content;
}

export default function FolderList ({content}: FolderListProps) {

  // desestructura el objeto
  const {_id,title, image, year} = content;

  console.log(_id)


  return (
    <List sx={{ width: '100%', bgcolor: 'darkgray', color:"white", borderRadius:".3em", overflow:"auto",position: 'relative',
    maxHeight: "50vh" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={title} src={image}>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} secondary={year} />
      </ListItem>
    </List>
  );
}