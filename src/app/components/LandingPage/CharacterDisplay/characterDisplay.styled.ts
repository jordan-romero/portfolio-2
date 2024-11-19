import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const CharacterDisplayContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(4),
}));

export const StyledVideo = styled('video')<{ width: number; height: number }>(
  ({ width, height }) => ({
    width: `${width}px`,
    height: `${height}px`,
  })
);
