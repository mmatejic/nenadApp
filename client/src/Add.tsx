import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();

  const cancel = () => navigate("/home");

  const add = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
  };

  const renderTextField = (id: string, required: boolean) => (
    <TextField
      key={id}
      margin="normal"
      required={required}
      fullWidth
      name={id}
      label={id.charAt(0).toUpperCase() + id.slice(1)}
      type={id}
      id={id}
      autoComplete={id}
    />
  );

  const polja: [string, boolean][] = [
    ["ime", true],
    ["nalog", true],
    ["PC", true],
    ["mejl", false],
    ["štampač", false],
    ["lokacija", false],
  ];

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Dodaj
      </Typography>
      <Box component="form" onSubmit={add} sx={{ mt: 1 }}>
        {polja.map(([id, required]) => renderTextField(id, required))}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Dodaj
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

export default Add;
