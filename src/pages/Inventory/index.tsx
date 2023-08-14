import { Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

function InventoryManagement() {
  const inventoryModules = [
    { link: "dashboard", name: "Dashboard" },
    { link: "inventory-count", name: "Inventory Count" },
    { link: "receiving-report", name: "Receiving Report" },
    { link: "goods-issue", name: "Goods Issue" },
    { link: "delivery-receipt", name: "Delivery Receipt" },
    { link: "material-request", name: "Material Request" },
  ];

  return (
    <Box display="flex">
      <Box
        boxShadow={3}
        flexDirection="column"
        display="flex"
        flex={1}
        sx={{
          height: "100vh",
        }}
      >
        {inventoryModules.map((module) => {
          return (
            <Box
              boxShadow={1}
              padding="10px"
              fontSize="1.2em"
              paddingLeft="20px"
              sx={{ ":hover": { backgroundColor: "lightgrey" } }}
            >
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                key={module.link}
                to={module.link}
              >
                {module.name}
              </Link>
            </Box>
          );
        })}
      </Box>

      <Box
        flex={4}
        sx={{
          flexDirection: "column",
          height: "100vh",
          display: "flex",
          padding: "30px",
          justifyItems: "center",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default InventoryManagement;
