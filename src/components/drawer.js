import React from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";


export default function DrawerComp(){

    const[openDrawer, setOpenDrawer] = useState(false)

    return(
        <div>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>
                                Login
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton component={NavLink} to="/">
                    <ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton component={NavLink} to="/products">
                    <ListItemIcon>
                        <ListItemText primary="Products" />
                    </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton component={NavLink} to="/contact">
                    <ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton sx={{color:"#ffffff"}} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
                </IconButton>
        </div>
    )
}