import React, { Fragment, useState } from "react";
import { Button, makeStyles, Menu, MenuItem } from "@material-ui/core";
import MenuList from "./MenuList";

const useStyles = makeStyles((theme) => ({
  container: {
    // display: "grid",
    // gridTemplateColumns: "repeat(24, 1fr)",
    // gridTemplateRows: "repeat(2, 1fr)"
  },
  container_1: {
    gridColumn: "span 24",
    gridRow: "span 1",
    display: "flex"
  },
  container_2: {
    gridColumn: "span 24",
    gridRow: "span 1",
    display: "flex"
  }
}));

const Navbar = () => {
  const classes = useStyles();

  // popup Menu
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // Custom Built Menu List
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (event) => {
    setOpenMenu((val) => !val);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    // <div className={classes.container}>
    <Fragment>
      <div className={classes.container_1}>
        <Button
          size='small'
          aria-controls='menu'
          aria-haspopup='true'
          onClick={handleClick}>
          File
        </Button>
        {/* <Menu
          id='menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={handleClose}>Menu item 1</MenuItem>
          <MenuItem onClick={handleClose}>Menu item 1</MenuItem>
          <MenuItem onClick={handleClose}>Menu item 1</MenuItem>
          <MenuItem onClick={handleClose}>Menu item 1</MenuItem>
        </Menu> */}
        <Button size='small' onClick={handleClick}>
          View
        </Button>
        {openMenu ? <MenuList onClick={handleClose} /> : null}
        <Button size='small'>Edit</Button>
        <Button size='small'>Terminal</Button>
        <Button size='small'>File</Button>
        <Button size='small'>View</Button>
        <Button size='small'>Edit</Button>
        <Button size='small'>Terminal</Button>

        {/* <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button> */}
      </div>
      <div className={classes.container_2}>
        <Button size='small'>File</Button>
        <Button size='small'>View</Button>
        <Button size='small'>Edit</Button>
        <Button size='small'>Terminal</Button>
        <Button size='small'>File</Button>
        <Button size='small'>View</Button>
        <Button size='small'>Edit</Button>
        <Button size='small'>Terminal</Button>
      </div>
    </Fragment>
    // </div>
  );
};

export default Navbar;
