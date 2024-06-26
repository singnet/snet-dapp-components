import React from "react";
import Grid from "@mui/material/Grid";
import { withStyles } from "@mui/styles";

import { useStyles } from "./styles";
import DummyGetStartedCard from "shared/dist/assets/images/dummy-card.png";
import CategoryDetails from "./CategoryDetails";

const Category = ({ classes, title, content, rightAlign, media }) => {
    return (
        <Grid
            container
            spacing={24}
            className={`${classes.CategoryWrapper} ${rightAlign ? classes.reverseDirection : null}`}
        >
            <Grid item xs={12} sm={6} md={6} lg={6} className={classes.CategoryMedia}>
                <img
                    src={media || DummyGetStartedCard}
                    alt="DummyImage"
                    className={classes.FullWidth}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} className={classes.CategoryContent}>
                <h3>{title}</h3>
                {content.map((item) => (
                    <CategoryDetails type={item.type} value={item.value} key={item.type} />
                ))}
            </Grid>
        </Grid>
    );
};

export default withStyles(useStyles)(Category);
