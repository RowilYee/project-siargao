import "./App.css";
import { Routes, Link, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Accounting from "./pages/Accounting";
import Dashboard from "./pages/Dashboard";
import Purchasing from "./pages/Dashboard";

function App() {
  return (
    <Box>
      <NavContainer boxShadow={3}>
        <Box>
          <BrandName>sourceCode.io</BrandName>
        </Box>
        <LinkContainer>
          <MyButton to="/dashboard">Dashboard</MyButton>
          <MyButton to="/accounting">Accounting</MyButton>
          <MyButton to="/inventory">Inventory Management</MyButton>
          <MyButton to="/purchasing">Purchasing</MyButton>
          <MyButton to="/production">Production</MyButton>
        </LinkContainer>
      </NavContainer>
      <Box>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/accounting/*" element={<Accounting />} />
          <Route path="/purchasing/*" element={<Purchasing />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;

const MyButton = styled(Link)({
  color: "black",
  padding: "10px",
  textDecoration: "none",
  ":hover": {
    backgroundColor: "#6c757d",
    borderRadius: "5px",
    color: "white",
  },
  ":focus": {
    backgroundColor: "#6c757d",
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
