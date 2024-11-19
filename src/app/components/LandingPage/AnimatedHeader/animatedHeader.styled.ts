import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

export const HeaderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
}));

export const StaticText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.text.secondary,
  fontWeight: 'normal',
}));

export const NameText = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '4rem',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: theme.spacing(6),
  margin: 0,
  padding: 0,
}));

export const RoleText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 'normal',
}));

export const DynamicTextContainer = styled(Box)(({ theme }) => ({
  height: '3em',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
}));

export const DynamicText = styled(Typography)(({ theme }) => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
}));

export const BlinkingCursor = styled(Box)(({ theme }) => ({
  width: '2px',
  height: '1em',
  backgroundColor: theme.palette.secondary.main,
  marginLeft: theme.spacing(1),
  animation: 'blink 0.7s infinite',
  '@keyframes blink': {
    '0%': { opacity: 0 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0 },
  },
}));
