import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
    color: theme.palette.common.black,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border:"1px solid black",
    backgroundColor: alpha(theme.palette.common.white, 1),
    maxWidth: "568px",
    width:"100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    pointerEvents: 'none',
    width:"10%"
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.common.black,
    width:"90%",
    borderRight:"1px solid black",
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(1)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      flexGrow: 1
    },
  }));

export default function SearchBar(){
    return (
        <>
            
        <Search>
            <StyledInputBase
              placeholder="Search a album of your choice"
              inputProps={{ 'aria-label': 'Search' }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            
          </Search>
        </>
    )
}