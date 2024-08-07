import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { FolderListProps } from './FolderList';

export interface Content {
  _id: string;
  title?: string;
  image?: string;
  year?: string;
  gender?: string;
  synopsis?: string;
  cast?: string;
  duration?: string;
  playback?: string;
  trailer?: string;
  typeContent?: string;
}

export default function ContentList ({content, onSelect, selectedContent}: FolderListProps) {

  // desestructura el objeto
  const {_id, title, image, year, typeContent} = content;

  const handleSelect = () => {
    onSelect(_id);
    location.href = `/content?${_id}-${typeContent}`;
  };

  return (
    <div>
      <div onClick={handleSelect} style={{ background: selectedContent === _id ? 'lightblue' : 'darkgray' }}>
        <List sx={{ width: '100%', bgcolor: 'darkgray', color:"white", borderRadius:".3em", overflow:"auto",position: 'relative',
        maxHeight: "50vh",'&:hover': {
              bgcolor: 'lightgray',
              color: 'black',
              cursor:'pointer'
            }}} onClick={handleSelect}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt={title} src={image}>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={title} secondary={year} />
          </ListItem>
        </List>
      </div>
    </div>
  );
}