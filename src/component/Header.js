import React from "react";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";

function Header() {
    return(
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h5">Vehicle Management Application</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;