import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/Searchbar';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ background: theme.palette.green }}>
        <Toolbar sx={{justifyContent: "space-between"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            borderRadius="0px"
          >
            <Logo />
            
          </IconButton>
          <SearchBar />
          <Button  
          sx={{ 
            background:theme.palette.black ,
            color:theme.palette.green,
            fontWeight: 600,
            textTransform: "none",
            padding: "10px 16px",
            borderRadius: "12px",
            fontSize: "18px"
          }} >
            Give Feedback
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
