import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { ModalContent } from './ModalContent';
import Radio from '@mui/material/Radio';

export interface Content {
  _id: string;
  title: string;
  image: string;
  year: string;
  gender: string;
  synopsis: string;
  cast: string;
  duration: string;
  playback: string;
  trailer: string;
}

export interface FolderListProps {
  content: Content;
  onSelect: (id: string) => void;
  selectedContent: string | null;
}


export default function FolderList ({content, onSelect, selectedContent}: FolderListProps) {
  
  // desestructura el objeto
  const {_id, title, image, year} = content;

  const [open, setOpen] = useState(false);
  
  const openPreview = () => {
    setOpen(true);
  }

  const handleSelect = () => {
    onSelect(_id);
    openPreview();
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
            <Radio
                checked={selectedContent == _id}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(_id);
                }}
                value={content._id}
                color="primary"
              />
          </ListItem>
        </List>
      </div>
      <ModalContent open={open} setOpen={setOpen} content={content}/>
    </div>
  );
}