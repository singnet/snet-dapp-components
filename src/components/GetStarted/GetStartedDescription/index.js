import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

import StyledButton from "shared/dist/components/StyledButton";
import { useStyles } from "./styles";

const GetStartedDescription = ({
    classes,
    title,
    description,
    button,
    btnText,
    btnType,
    handleClick,
}) => {
    return (
        <div className={classes.GetStartedDescription}>
            <h2>{title}</h2>
            <p>{description}</p>
            {button && <StyledButton btnText={btnText} type={btnType} onClick={handleClick} />}
        </div>
    );
};

GetStartedDescription.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};
export default withStyles(useStyles)(GetStartedDescription);
