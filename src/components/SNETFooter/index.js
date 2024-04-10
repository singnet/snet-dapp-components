import React from "react";
import { Box } from "@mui/material";
import SnetFooterColumns from "./SnetFooterColumns";
import SnetFooterCopyright from "./SnetFooterCopyright";
import { useStyles } from "./styles";

const SnetFooter = () => {
    const classes = useStyles();

    return (
        <Box className={classes.snetFooterContainer}>
            <Box className={classes.snetFooter}>
                <SnetFooterColumns />
                <SnetFooterCopyright />
            </Box>
        </Box>
    );
};

export default SnetFooter;
