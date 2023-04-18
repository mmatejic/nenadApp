import { Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container component="main" maxWidth="xs">
      <Box>
        <Link to="/add">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 5, mb: 1 }}
          >
            Novi unos
          </Button>
        </Link>
        <Link to="/edit">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1 }}
          >
            Izmena
          </Button>
        </Link>
        <Link to="/delete">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1 }}
          >
            Brisanje
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default Home;
