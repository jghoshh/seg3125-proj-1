import { Container, Box, Typography, Button } from "@mui/material";
import HoverCard from "../components/HoverCard";

const Team = () => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <Container>
      <Box>
        <Typography variant="h3" sx={{fontFamily: "NewsReader", fontWeight: "500", marginTop: "60px"}}>Physiotherapists</Typography>
        <Box display="flex" justifyContent={"center"} alignItems={"center"}>
          <HoverCard name="Dr. John Parker" description="Dr. John Parker is a seasoned physiotherapist with over 15 years of experience specializing in sports injuries and orthopedic rehabilitation." imageUrl={`${basePath}images/john_parker.jpg`} />
          <HoverCard name="Dr. Melody Parker" description="Dr. Melody Parker is a seasoned physiotherapist with over 8 years of experience specializing in sports injuries and orthopedic rehabilitation." imageUrl={`${basePath}images/melody_parker.jpg`}/>
          <HoverCard name="Dr. Caroline Smith" description="Dr. Caroline Smith is a seasoned physiotherapist with over 8 years of experience specializing in sports injuries and orthopedic rehabilitation." imageUrl={`${basePath}images/caroline_smith.jpg`} />
          <HoverCard name="Dr. Jacob Doe" description="Dr. Jacob Doe is a seasoned physiotherapist with over 15 years of experience specializing in sports injuries and orthopedic rehabilitation." imageUrl={`${basePath}images/jacob_doe.jpg`} />
        </Box>
      </Box>
      <Box>
        <Typography variant="h3" sx={{fontFamily: "NewsReader", fontWeight: "500", marginTop: "60px"}}>Kinesiologists</Typography>
        <Box display="flex" justifyContent={"center"} alignItems={"center"}>
        <HoverCard name="Kevin Lin" description="Kevin Lin is a seasoned kinesiologist with over 6 years of experience specializing in sports injuries and orthopedic rehabilitation." imageUrl={`${basePath}images/john_parker.jpg`} />
          <HoverCard name="Melody Smith" description="Melody Smith is a seasoned kinesiologist with over 3 years of experience specializing in sports injuries and orthopedic rehabilitation." imageUrl={`${basePath}images/melody_parker.jpg`}/>
          <HoverCard name="Alina Parker" description="Alina Parker is a seasoned kinesiologist with over 3 years of experience specializing in sports injuries and orthopedic rehabilitation." imageUrl={`${basePath}images/caroline_smith.jpg`} />
          <HoverCard name="Brent Do Rego" description="Brent Do Rego is a seasoned kinesiologist with over 3 years of experience specializing in sports injuries and orthopedic rehabilitation." imageUrl={`${basePath}images/jacob_doe.jpg`} />
        </Box>
      </Box>
      <Box>
        <Typography variant="h3" sx={{fontFamily: "NewsReader", fontWeight: "500", marginTop: "60px"}}>Masseuses</Typography>
        <Box display="flex" justifyContent={"center"} alignItems={"center"}>
        <HoverCard name="Atticus Ho" description="Dr. John Parker is a seasoned masseuse with over 3 years of experience specializing in sports injuries and orthopedic rehabilitation." imageUrl={`${basePath}images/john_parker.jpg`} />
          <HoverCard name="Sarah Do Rego" description="Dr. Melody Parker is a seasoned masseuse with over 3 years of experience specializing in sports injuries and orthopedic rehabilitation." imageUrl={`${basePath}images/melody_parker.jpg`}/>
          <HoverCard name="Diane Killian" description="Dr. Caroline Smith is a seasoned masseuse with over 3 years of experience specializing in sports injuries and orthopedic rehabilitation." imageUrl={`${basePath}images/caroline_smith.jpg`} />
          <HoverCard name="Noah Palmer" description="Dr. Jacob Doe is a seasoned masseuse with over 3 years of experience specializing in sports injuries and orthopedic rehabilitation." imageUrl={`${basePath}images/jacob_doe.jpg`} />
        </Box>
      </Box>
      <Box display="flex" alignItems={"center"} justifyContent={"center"} sx={{paddingTop: "100px", paddingBottom: "100px"}}>
        <Box display="flex" alignItems={"center"} justifyContent={"space-between"} width={"70%"} >
          <Typography variant="h2"> <span style={{ fontWeight: "400", fontStyle: "italic" }}>Impressed</span> {<br/>} by our team? </Typography>
          <Button variant="contained" sx={{ marginTop: "30px" }}>
                Book your <span style={{ "marginLeft": 4, "marginRight": 4, fontWeight: 700, fontStyle: "italic" }}>free</span>consultation
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Team;