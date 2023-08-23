import { Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";

function InventoryManagement() {
  const inventoryModules = [
    { link: "dashboard", name: "Dashboard" },
    { link: "sales-invoice", name: "Sales Invoice" },
    { link: "receiving-report", name: "Receiving Report" },
    { link: "goods-issue", name: "Goods Issue" },
    { link: "delivery-receipt", name: "Delivery Receipt" },
    { link: "material-request", name: "Material Request" },
  ];

  return (
    <>
      <Box
        boxShadow={3}
        flexDirection="column"
        flex={1}
        sx={{
          height: "100%",
          position: "fixed",
          top: "60px",
          left: "0",
          width: "230px",
        }}
      >
        {inventoryModules.map((module) => {
          return (
            <Box boxShadow={1} fontSize="1em" height="40px" key={module.link}>
              <InventoryLinks to={module.link}>{module.name}</InventoryLinks>
            </Box>
          );
        })}
      </Box>

      <Box
        flex={4}
        sx={{
          flexDirection: "column",
          display: "flex",
          padding: "30px",
          marginLeft: "220px",
          width: "auto",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}

export default InventoryManagement;

const InventoryLinks = styled(Link)({
  textDecoration: "none",
  color: "black",
  height: "100%",
  width: "100%",
  paddingLeft: "10px",
  overflow: "hidden",
  ":hover": {
    backgroundColor: "#caf0f8",
    color: "black",
  },
  alignItems: "center",
  display: "flex",
});
