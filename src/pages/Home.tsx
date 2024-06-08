import { Container, Typography, Box, Button, Stack } from "@mui/material";

const Home = () => {
  const basePath = import.meta.env.BASE_URL;
  
  return (
    <>
      <Box sx={{
        backgroundImage: `url(${basePath}images/one.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '20% 50%',
        backgroundSize: 'cover',
        height: "80vh",
        width: "100vw",
        backgroundColor: 'rgba(0, 0, 0, 0.82)',
        backgroundBlendMode: 'darken',
        overflow: 'hidden',
      }}>
        <Container sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
          flexDirection: "column",
          height: "100%",
        }}
        >
          <Box width="100%" display="flex" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Typography variant="h2" color="text.secondary" textAlign={"center"}>Physiotheraphy, <span style={{ fontWeight: "300", fontStyle: "italic" }}>perfected</span></Typography>
            <Typography variant="body2" color="text.secondary" textAlign={"center"} width={"75%"} marginTop={"20px"}>
              Rehabilitate and recover faster with professional, evidence-based physiotherapy. <br />
              With over <span style={{ textDecoration: "underline" }}>100,000</span> patients treated, Ambrosia is your recovery partner.</Typography>
            <Button variant="contained" sx={{ marginTop: "30px" }}>
              Book your <span style={{ "marginLeft": 4, "marginRight": 4, fontWeight: 700, fontStyle: "italic" }}>free</span>consultation
            </Button>
          </Box>
        </Container>
      </Box>
      <Container sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "50px",
        flexDirection: "column",
        height: "100%"
      }}
      >
        <Typography variant="h2" sx={{ marginBottom: "30px", textAlign: "center" }}>
          Why Ambrosia?
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }}
          spacing={10} width={"100%"} justifyContent="center"
          alignItems="center">
          <Box sx={{ width: "268px" }}>
            <Typography variant="h2" sx={{ fontSize: "2rem", textAlign: "center", marginBottom: "10px" }}>
              Affordable
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Etiam nec  posuere metus, ac finibus massa. Nullam pharetra urna nec facilisis  iaculis. Sed sit amet tristique dui.
            </Typography>
            <Button variant="contained" sx={{ marginTop: "20px" }}>
              View Services & Rates
            </Button>
          </Box>
          <Box sx={{ width: "268px" }}>
            <Typography variant="h2" sx={{ fontSize: "2rem", textAlign: "center", marginBottom: "10px" }}>
              Exceptional Team
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Etiam nec  posuere metus, ac finibus massa. Nullam pharetra urna nec facilisis  iaculis. Sed sit amet tristique dui.
            </Typography>
            <Button variant="contained" sx={{ marginTop: "20px" }}>
              Meet the team
            </Button>
          </Box>
        </Stack>
      </Container>
      <Box sx={{
        backgroundImage: `url(${basePath}images/two.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '20% 80%',
        backgroundSize: '120%',
        height: "50vh",
        width: "100vw",
        backgroundColor: 'rgba(0, 0, 0, 0.82)',
        backgroundBlendMode: 'darken',
        overflow: 'hidden',
      }}>
        <Container sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "50px",
          flexDirection: "row",
          height: "100%"
        }}>
        <Box display="flex" alignItems={"center"} justifyContent={"center"} flexDirection={"column"} width="100%">
          <Typography variant="h2" color="text.secondary" sx={{ fontSize: "3rem", marginBottom: "20px", textAlign: "center"}}>
            "The best physiotherapist I've ever been to."
          </Typography>
          <Typography variant="body1" color="text.secondary">
            - Janet, Toronto
          </Typography>
        </Box>
        </Container>
      </Box>
      <Container id="contact" sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
        flexDirection: "column",
      }}
      >
        <Typography variant="h2" sx={{ marginBottom: "30px", textAlign: "center" }}>
          Our Locations
        </Typography>
        <Box display="flex" justifyContent={"space-between"} alignItems={"center"} flexDirection={"row"} width="100%">
          <Box>
            <Typography variant="h2" sx={{ fontSize: "2rem", textAlign: "center", marginBottom: "10px" }}>
                Ottawa
              </Typography>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.201700151497!2d-75.69794782235974!3d45.42543527107324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04fe3bf2ba89%3A0x477e1c2d620fa69a!2s1%20Rideau%20St%2C%20Ottawa%2C%20ON%20K1N%208S7!5e0!3m2!1sen!2sca!4v1717451321439!5m2!1sen!2sca" style={{ border: 0 }} width="500" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Box>
          <Box>
          <Typography variant="h2" sx={{ fontSize: "2rem", textAlign: "center", marginBottom: "10px" }}>
                Toronto
            </Typography>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2692509270196!2d-79.38963172241282!3d43.642566171102736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1717455537551!5m2!1sen!2sca" style={{ border: 0 }} width="500" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;