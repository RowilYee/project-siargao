import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Accounting from "./pages/Accounting";
import Dashboard from "./pages/Dashboard";
import Purchasing from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import ReceivingReport from "./components/Forms/ReceivingReport";
import InventoryDashboard from "./components/InventoryDashboard";
import GoodsIssue from "./components/Forms/GoodsIssue";
import SalesForm from "./components/Forms/SalesForm";
import Navbar from "./components/Navbar";
import Sales from "./pages/Sales";

function App() {
  return (
    <>
      <Navbar />
      <Box paddingTop="60px">
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/accounting/*" element={<Accounting />}></Route>
          <Route path="/purchasing/*" element={<Purchasing />} />
          <Route path="/inventory" element={<Inventory />}>
            <Route path="dashboard" element={<InventoryDashboard />} />
            <Route path="inventory-count" element={<Dashboard />} />
            <Route path="receiving-report" element={<ReceivingReport />} />
            <Route path="goods-issue" element={<GoodsIssue />} />
            <Route path="delivery-receipt" element={<Dashboard />} />
            <Route path="material-request" element={<Dashboard />} />
          </Route>
          <Route path="/sales" element={<Sales />}>
            <Route path="sales-invoice" element={<SalesForm />} />
          </Route>
        </Routes>
      </Box>
    </>
  );
}

export default App;
