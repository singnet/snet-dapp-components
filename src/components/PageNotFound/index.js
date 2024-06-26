import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import StyledButton from "shared/dist/components/StyledButton";
import PageNotFoundImage from "shared/dist/assets/images/pageNotFound.png";
import AnchorLink from "shared/dist/components/AnchorLink";
import { useStyles } from "./styles";

const PageNotFound = ({ classes, homePath }) => {
    const navigate = useNavigate();

    const handleGoToHome = () => {
        if (homePath) {
            navigate(homePath);
        }
    };

    return (
        <Grid container className={classes.pageNotFoundContainer}>
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.mediaContentContainer}>
                <Grid item xs={12} sm={12} md={6} lg={6} className={classes.mediaContiner}>
                    <img src={PageNotFoundImage} title="Page Not Found" alt="Page not found" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className={classes.contentContainer}>
                    <Typography variant="h3">Page not found!</Typography>
                    <Typography>
                        The page that you are trying to access is moved, currently down or never
                        existed. Please check the URL.
                    </Typography>
                    <StyledButton
                        type="transparentBlueBorder"
                        btnText="go to home"
                        onClick={handleGoToHome}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.description}>
                <Typography>
                    If you are seeing this message repeatedly, let us know at{" "}
                    <AnchorLink label="support@singularitynet.io" href="/" /> and we will look into
                    it.
                </Typography>
            </Grid>
        </Grid>
    );
};

PageNotFound.propTypes = {
    handleGoToHome: PropTypes.func,
};

export default withStyles(useStyles)(PageNotFound);
