import React from "react";
import { NavLink } from "react-router-dom";
import { Toolbar } from "@mui/material";
import { AppBar } from "@mui/material";
import { Tabs, Tab} from "@mui/material";
import { Button } from "@mui/material";
import DrawerComp from "./drawer.js";
import { useMediaQuery, useTheme} from "@mui/material";

function Nav() {
  const theme=useTheme();
  const isMatch= useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar position="static">
      <Toolbar>
        Mobile&Co

        {isMatch ?(
          <DrawerComp />
        ) : (
          <>
      <Tabs>
        <NavLink to="/"><Tab label="Home" sx={{ color: "white" }}/></NavLink>
         <NavLink to="/products"><Tab label="Products" sx={{ color: "white" }}/></NavLink>
        <NavLink to="/contact"><Tab label="Contact" sx={{ color: "white" }}/></NavLink>
      </Tabs>

      <Button sx={{ marginLeft: "auto" }} variant="contained">
        Log in
      </Button>
      </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
