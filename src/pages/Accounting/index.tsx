import { Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Accounting = () => {
  const modules = [
    { link: "payables", name: "Payables" },
    { link: "canvass-form", name: "Canvass Form" },
    { link: "purchase-order", name: "Purchase Order" },
    { link: "receiving-report", name: "Receiving Report" },
    { link: "goods-issue", name: "Goods Issue" },
    { link: "goods-receipt", name: " Goods Receipt" },
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
        {modules.map((module) => {
          return (
            <Box boxShadow={1} fontSize="1em" height="40px">
              <InventoryLinks
                key={module.link}
                to={`/accounting/${module.link}`}
              >
                {module.name}
              </InventoryLinks>
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
};

export default Accounting;

const InventoryLinks = styled(Link)({
  textDecoration: "none",
  color: "black",
  height: "100%",
  width: "100%",
  paddingLeft: "10px",
  overflow: "hidden",
  ":hover": {
    backgroundColor: "#297F36",
    color: "white",
  },
  alignItems: "center",
  display: "flex",
});
