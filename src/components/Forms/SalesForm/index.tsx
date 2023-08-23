import {
  Box,
  Typography,
  TextField,
  Autocomplete,
  Table,
  Stack,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { useState } from "react";

function SalesForm() {
  const oumList = [
    {
      value: "KG",
    },
    {
      value: "LEN",
    },
    {
      value: "PC",
    },
    {
      value: "UNIT",
    },
  ];
  const material = [
    { label: "PVC PIPE" },
    { label: "Lockscreen" },
    { label: "Colgate" },
  ];
  const headers = [
    { header: "Material Description" },
    { header: "Oum" },
    { header: "Quantity" },
  ];
  const [data, setData] = useState([
    { name: "", quantity: "", matDesc: "", oum: "" },
  ]);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const [selected, setSelected] = useState([]);

  const handleClick = () => {
    setSelected((prev) => {
      return [...prev].concat([data]);
    });
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography fontSize={30}>Sales Invoice</Typography>

      <Stack>
        <Box>
          <TextField
            variant="standard"
            label="Customer Name"
            type="text"
            name="name"
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <Autocomplete
            disablePortal
            options={material}
            freeSolo
            renderInput={(params) => (
              <TextField
                {...params}
                label="Material Description"
                name="matDesc"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                size="medium"
                onSelect={handleChange}
              />
            )}
          />
          <TextField
            variant="standard"
            label="Quantity"
            name="quantity"
            type="number"
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            select
            label="OUM"
            name="oum"
            SelectProps={{
              native: true,
            }}
            variant="standard"
            onChange={handleChange}
          >
            {oumList.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </TextField>
          <button type="button" onClick={handleClick}>
            Save
          </button>
        </Box>
      </Stack>
      <Stack>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map((d) => {
                  return (
                    <TableCell key={d.header} align="center">
                      {d.header}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {selected.map((row: any) => (
                <TableRow
                  key={row.matDesc}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                >
                  <TableCell align="center">{row.matDesc}</TableCell>
                  <TableCell align="center">{row.oum}</TableCell>
                  <TableCell align="center">{row.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  );
}

export default SalesForm;
