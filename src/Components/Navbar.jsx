// import styled from '@emotion/styled'
import { styled } from '@mui/material/styles';
import { Pets } from '@mui/icons-material'
import { Box,AppBar,Toolbar, Typography, InputBase, Avatar, Menu, MenuItem } from '@mui/material'
import Badge from '@mui/material/Badge';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications'
import { useState } from 'react';
const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display:'flex',
        justifyContent:'space-between'
    })
    const Search = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius:'10px',
        width: "40%",
      }));

      const Icons = styled(Box)(({theme})=>({
       display:'none',
       gap:'20px' ,
       alignItems:'center',
       [theme.breakpoints.up('sm')]: {
        display:'flex',
      },
    }))

    const UserBox = styled(Box)(({theme})=>({
        display:'flex',
        gap:'20px' ,
        alignItems:'center',
        [theme.breakpoints.up('sm')]: {
            display:'none',
          },
     }))
     const [open , setopen]=useState(false);
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:'none', sm:'block'}}}>Navbar</Typography>
        <Pets sx={{display:{xs:'block', sm:'none'}}}/>
        <Search>
        <InputBase placeholder='search...'/>
        </Search>
        <Icons>
        <Badge badgeContent={4} color="error">
         <Mail />
         </Badge>
         <Badge badgeContent={2} color="error">
         <Notifications />
         </Badge>
         <Avatar sx={{width:30,height:30}}
         onClick={e=>setopen(true)}
         />
        </Icons>

        <UserBox onClick={e=>setopen(true)}>
        <Avatar sx={{width:30,height:30}}/>
        <Typography variant='span'>Rizwan</Typography>
        </UserBox>
             </StyledToolbar>
             <Menu

        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={e=>setopen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      
    </AppBar>
  )
}

export default Navbar
