import { Box, Button, Typography, Container, Stack, createTheme, ThemeProvider } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Rbar from "./Components/Rbar";
import Navbar from "./Components/Navbar";
import AddComp from "./Components/AddComp";
import { useState } from "react";
function App() {
  const [mode, setmode]=useState('light');
  const darktheme=createTheme({
    palette:{
      mode:mode,
    }
  })
  return (
    <ThemeProvider theme={darktheme}>  
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar mode={mode} setmode={setmode}/>
        <Feed />
        <Rbar />
      </Stack>
      <AddComp/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
