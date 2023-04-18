import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Delete() {
  const navigate = useNavigate();

  const cancel = () => navigate("/home");

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Obriši
      </Typography>
      <Box component="form" onSubmit={submit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          name={"adresa"}
          label={"Adresa"}
          type={"adresa"}
          id="adresa"
          autoComplete="adresa"
        />{" "}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Obriši
        </Button>
        <Button
          fullWidth
          variant="outlined"
          sx={{ mt: 0, mb: 0 }}
          onClick={cancel}
        >
          Odustani
        </Button>
      </Box>
    </Container>
  );
}

export default Delete;
