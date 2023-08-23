import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <NavContainer
      display="block"
      boxShadow={3}
      position="fixed"
      top={0}
      zIndex={9999}
    >
      <Box>
        <BrandName>sourceCode.io</BrandName>
      </Box>
      <LinkContainer>
        <MyButton to="/dashboard">Dashboard</MyButton>
        <MyButton to="/accounting">Accounting</MyButton>
        <MyButton to="/inventory">Inventory Management</MyButton>
        <MyButton to="/purchasing">Purchasing</MyButton>
        <MyButton to="/production">Production</MyButton>
        <MyButton to="/sales">Sales</MyButton>
      </LinkContainer>
    </NavContainer>
  );
}

export default Navbar;

const MyButton = styled(Link)({
  color: "black",
  padding: "10px",
  textDecoration: "none",
  ":hover": {
    backgroundColor: "#297F36",
    borderRadius: "5px",
    color: "white",
  },
  ":focus": {
    backgroundColor: "#297F36",
    borderRadius: "5px",
    color: "white",
  },
});

const NavContainer = styled(Box)({
  display: "flex",
  width: "100vw",
  alignContent: "center",
  gap: "5rem",
  padding: ".5em",
});

const BrandName = styled(Box)({
  fontSize: "25px",
  paddingLeft: "30px",
  alignSelf: "center",
});

const LinkContainer = styled(Box)({
  alignSelf: "center",
  width: "1000px",
  display: "flex",
  justifyContent: "space-around",
});
