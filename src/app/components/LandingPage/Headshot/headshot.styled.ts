import { styled } from '@mui/material/styles';
import { Box, Button, ButtonProps } from '@mui/material';

export const HeadShotContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '600px',
  height: '600px',
  marginLeft: '20px',
  marginBottom: '20px',
}));

export const DownloadButton = styled(Button)<ButtonProps>(({ theme }) => ({
  position: 'absolute',
  bottom: 70,
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
  fontWeight: 'bold',
  padding: '10px 20px',
  borderRadius: '20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textDecoration: 'none', // Prevent underline for anchor styling
}));
