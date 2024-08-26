import React, { FC } from "react";
import { useStyles } from "./styles";
import { FooterCopyrightProps } from "../SNETFooter.types"

const SnetFooterCopyright: FC<FooterCopyrightProps> = () => {
    const classes = useStyles();
    const year = new Date().getFullYear();
    return (
        <React.Fragment>
            <hr className={classes.footerDivider} />
            <p className={classes.copyrightText}>
                Copyright © {year} SingularityNET All rights reserved.
            </p>
        </React.Fragment>
    );
};

export default SnetFooterCopyright;