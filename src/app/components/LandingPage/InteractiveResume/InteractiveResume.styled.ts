import { Card, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledSkillCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  text-align: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.background.paper};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledSkillImage = styled(CardMedia)`
  width: 60px;
  height: 60px;
  margin-bottom: 12px;
`;