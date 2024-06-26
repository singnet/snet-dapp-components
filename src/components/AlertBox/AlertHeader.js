import React from "react";
import { withStyles } from "@mui/styles";

import { useStyles } from "./styles";

const AlertHeader = ({ header, classes }) => {
    if (header) {
        return <span className={classes.alertHeader}>{header}</span>;
    }
    return null;
};

export default withStyles(useStyles)(AlertHeader);
