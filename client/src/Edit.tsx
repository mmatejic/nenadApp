import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();

  const cancel = () => navigate("/home");

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Izmeni
      </Typography>
      <Box component="form" onSubmit={submit} sx={{ mt: 1 }}>
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

export default Edit;
