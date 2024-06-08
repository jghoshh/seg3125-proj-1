import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

interface HoverCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const CustomCard = styled(Card)({
  borderRadius: "7px",
  position: 'relative',
  height: 290,
  width: 242,
  margin: 20,
  '&:hover .cardDetails': {
    opacity: 1,
    transition: 'opacity 0.3s'
  }
});

const CardDetails = styled(CardContent)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.85)',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  opacity: 0,
  padding: '16px',
  boxSizing: 'border-box'
});

function HoverCard({ name, description, imageUrl }: HoverCardProps) {
  return (
    <CustomCard>
      <CardMedia
        component="img"
        height="400"
        image={imageUrl}
        alt={name}
      />
      <CardDetails className="cardDetails">
        <Typography variant="h5" sx={{fontFamily: "Mukta", textAlign: "center", marginBottom: "15px"}}>{name}</Typography>
        <Typography variant="body2" sx={{fontFamily: "Mukta", textAlign: "left", lineHeight: "1.4rem"}}>{description}</Typography>
      </CardDetails>
    </CustomCard>
  );
}

export default HoverCard;