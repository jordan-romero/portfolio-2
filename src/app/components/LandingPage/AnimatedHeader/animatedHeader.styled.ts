import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

export const HeaderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  padding: theme.spacing(4, 2),
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
  marginBottom: theme.spacing(8),
  margin: 0,
  padding: 0,
}));

export const RoleText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 'normal',
  fontSize: '1.5rem',
  color: theme.palette.text.primary,
}));

export const DynamicTextContainer = styled(Box)(({ theme }) => ({
  height: '3em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  marginTop: theme.spacing(2),
}));

export const DynamicText = styled(Typography)(({ theme }) => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  fontSize: '1.8rem',
  fontWeight: '500',
}));

export const BlinkingCursor = styled(Box)(({ theme }) => ({
  width: '2px',
  height: '1.8rem',
  backgroundColor: theme.palette.secondary.main,
  marginLeft: theme.spacing(1),
  animation: 'blink 0.7s infinite',
  '@keyframes blink': {
    '0%': { opacity: 0 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0 },
  },
}));
