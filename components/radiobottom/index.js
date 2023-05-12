import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [value, setValue] = React.useState("Нижний Новгород");

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<LocationOnOutlinedIcon/>}
        endIcon={open === false ? <KeyboardArrowDownOutlinedIcon/> : <KeyboardArrowUpOutlinedIcon/>}
        sx={{px: 0.2, mr: 1, color: {xs: "#000", sm: '#000', md: "#000", lg: "#fff", xl: "#fff"},}}
      >
        <Typography sx={{textDecoration: 'underline', color: {xs: "#000", sm: '#000', md: "#000", lg: "#fff", xl: "#fff"}, 
         textTransform: "none", fontSize: '16px'}}>{value}</Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
            "& .MuiPaper-root": {
                backgroundColor: "#F6F7F9"
            }
        }}
      >
        <FormControl sx={{
            px: 2, 
            }}>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={value}
                name="radio-buttons-group"
                onChange={(event) => setValue(event.target.value)}
            >
                <FormControlLabel onClick={handleClose} 
                value="Дзержинск" control={<Radio style={{color: "#000000"}} />} 
                label="Дзержинск" sx={{color: "#000000", fontSize: "14px"}} 
                />
                <FormControlLabel onClick={handleClose} 
                value="Нижний Новгород" control={<Radio style={{color: "#000000"}}/>} 
                label={"Нижний Новгород"} sx={{color: "#000000", fontSize: "14px"}} 
                />
                <FormControlLabel onClick={handleClose} 
                value="On-line" control={<Radio style={{color: "#000000", fontSize: "14px"}}/>} 
                label="On-line" sx={{color: "#000000"}}/>
            </RadioGroup>
        </FormControl>
      </Menu>
    </div>
  );
}
