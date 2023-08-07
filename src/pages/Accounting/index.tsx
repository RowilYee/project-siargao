import { Box } from "@mui/material";
import { Routes, Link, Route } from "react-router-dom";
import ReceivingReport from "../../components/Forms/ReceivingReport";

const Accounting = () => {
  const modules = [
    { link: "purchase-requisition", name: "Purchase Requisition" },
    { link: "canvass-form", name: "Canvass Form" },
    { link: "purchase-order", name: "Purchase Order" },
    { link: "receiving-report", name: "Receiving Report" },
    { link: "goods-issue", name: "Goods Issue" },
    { link: "goods-receipt", name: " Goods Receipt" },
    { link: "delivery-receipt", name: "Delivery Receipt" },
    { link: "material-request", name: "Material Request" },
  ];

  return (
    <Box display="flex">
      <Box
        flexDirection="column"
        display="flex"
        flex={1}
        sx={{
          height: "100vh",
        }}
      >
        {modules.map((module) => {
          return (
            <Link key={module.link} to={`/accounting/${module.link}`}>
              {module.name}
            </Link>
          );
        })}
      </Box>

      <Box
        flex={4}
        sx={{
          flexDirection: "column",
          height: "100vh",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {" "}
        <Routes>
          <Route
            path={"/accounting/receiving-report"}
            element={<ReceivingReport />}
          />
        </Routes>
      </Box>
    </Box>
  );
};

export default Accounting;
