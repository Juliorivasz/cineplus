/* eslint-disable @typescript-eslint/no-explicit-any */
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Content } from './FolderList';
import { useState } from 'react';

interface StateModal {
    open: boolean;
    setOpen: (value: boolean) => void;
    content: Content;
}


export const ModalContent = ({open, setOpen, content}:StateModal) => {

  const {title, image, year, gender, synopsis, cast, duration, playback, trailer} = content;

  const [currentLanguage, setCurrentLanguage] = useState<string | null>(null);
  const [currentPlatform, setCurrentPlatform] = useState<string | null>(null);
  const [currentLink, setCurrentLink] = useState<string | null>(null);

  const playBack = JSON.parse(playback);

    const closePreview = () => {
        setOpen(false);
      };

      const handleChangeServer = (language: string, platform: string, link: string) => {
        setCurrentLanguage(language);
        setCurrentPlatform(platform);
        setCurrentLink(link);
    };

      // console.log(JSON.parse(playback))

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

      <Typography variant="h6" sx={{ marginTop: '20px' }}>Enlaces de reproducción:</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {playBack.map((languageObj: any) => {
                        const language = Object.keys(languageObj)[0];
                        const platforms = languageObj[language];
                        return (
                            <Box key={language} sx={{ display: 'flex', alignItems: 'center', marginRight: '10px', flexDirection:'column' }}>
                                <Typography variant="subtitle1" sx={{ marginRight: '10px' }}>
                                    {language.charAt(0).toUpperCase() + language.slice(1)}:
                                </Typography>
                                {platforms.map((platformObj: any) => {
                                    const platform = Object.keys(platformObj)[0];
                                    const link = platformObj[platform];
                                    return (
                                        <Button
                                            key={platform}
                                            variant="contained"
                                            color={language === currentLanguage && platform === currentPlatform ? 'primary' : 'inherit'}
                                            onClick={() => handleChangeServer(language, platform, link)}
                                            sx={{ marginRight: '5px' }}
                                        >
                                            {platform}
                                        </Button>
                                    );
                                })}
                            </Box>
                        );
                    })}
                </Box>

                {currentLink && (
                    <Box sx={{ marginTop: '20px' }}>
                        <iframe
                            src={currentLink}
                            width="100%"
                            height="400"
                            frameBorder="0"
                            allowFullScreen
                            title="Playback"
                        ></iframe>
                    </Box>
                )}

      <Typography variant="body1" sx={{ mt: 2 }}><strong>Trailer:</strong></Typography>
        {trailer && (
          <iframe
            title={`${title}-trailer`}
            width="100%"
            height="400"
            src={trailer}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ marginTop: '20px' }}
          ></iframe>
        )}
      
    </DialogContent>
    <Button onClick={closePreview} color="primary" variant="contained" sx={{ margin: '20px' }}>
      Cerrar
    </Button>
  </Dialog>
  )
}
