import { Box, TextField, Typography, Button} from "@mui/material";
import { useState } from "react";


const Login = () => {
 const [loginState, setLoginState] = useState({username: "", password: ""})


  const handleChange = (e:any) => {
    const value = e.target.value;

    setLoginState({
      ...loginState,
      [e.target.name]: value
    })
    console.log(loginState)
  }

  const handleLogin = () => {
    if(loginState.username.length !==0 && loginState.password.length !== 0){
      alert(`Welcome ${loginState.username}`)
    }else{
      alert("Please fill all fields")
    }
  }
  

  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      marginTop="10em"    >
      <Box display="flex" flexDirection="column" rowGap={4}>
        <Typography variant="h4" textAlign="center">
          Welcome
        </Typography>
        <TextField
          name="username"
          onChange={handleChange}
          id="username"
          label="Username"
          variant="outlined"
          sx={{ width: 400 }}
        />
        <TextField
          name="password"
          onChange={handleChange}
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          sx={{ width: 400 }}
        />
        <Button onClick={handleLogin} variant="outlined">Login</Button>
      </Box>
    </Box>
  );
};

export default Login;
