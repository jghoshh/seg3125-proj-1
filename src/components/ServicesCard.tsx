import {Box, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface ServicesCardProps {
  title: string;
  services: string[];
  price: number;
}

const ServicesCard = ({title, services, price}: ServicesCardProps) => (
  <Box display="flex" justifyContent={"center"} alignItems={"center"} flexDirection="column" sx={{ backgroundColor: "#EEEEEE", maxWidth: "50%", margin: "40px", padding: "40px", borderRadius: "15px" }}>
    <Typography variant="h4" sx={{ textAlign: "center", fontFamily: "NewsReader", fontWeight: "500" }}>{title}</Typography>
    <List sx={{
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column",
      height: "149px"
    }}>
    {services.map((service) => (
        <ListItem key={service} sx={{ padding: "0px"}}>
          <ListItemIcon sx={{ minWidth: "0px", marginRight: "10px", color: "black" }}>
            <FiberManualRecordIcon sx={{ fontSize: 'small' }} />
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body2">{service}</Typography>} />
        </ListItem>
      ))}
    </List>
    <Typography variant="h3" sx={{marginTop: "20px", fontStyle: "italic", fontFamily: "NewsReader"}}>${price}/session</Typography>
  </Box>
);

export default ServicesCard;