import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <Container>
      <Button type="submit" variant="contained" onClick={logout}>
        ODJAVA
      </Button>
    </Container>
  );
}

export default Header;
