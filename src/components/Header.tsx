import { useTheme, Box, Typography, Container, Link } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const theme = useTheme();

  return (
    <Box
    height={"100px"}
    width={"100vw"}
    >
      <Container sx={{display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%", width: "90%"}}>
        <Box>
          <Typography variant="h3" sx={{fontFamily: "Newsreader", fontSize: "2rem"}}>Ambrosia</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          height="100%"
        >
          <Link underline="none" sx={{
              color: theme.palette.secondary.main,  
              '&:hover': {
                color: theme.palette.primary.main, 
              }
            }} component={RouterLink} to="/services">
            <Typography variant="body2" sx={{fontSize: "1rem", marginRight: "30px", letterSpacing: "0.05rem"}}>VIEW SERVICES & RATES</Typography>
          </Link>

          <Link underline="none" sx={{
              color: theme.palette.secondary.main,  
              '&:hover': {
                color: theme.palette.primary.main, 
              }
            }} component={RouterLink} to="/services">
            <Typography variant="body2" sx={{fontSize: "1rem",  letterSpacing: "0.05rem"}}>MEET THE TEAM</Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;