import React from "react";
import { withStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useStyles } from "./styles";

const UserProfileCard = ({ classes, nickName, onClose }) => {
    return (
        <div className={classes.Userdetails}>
            <AccountCircleIcon />
            <div>
                <h4>{nickName}</h4>
            </div>
            {onClose && <CloseIcon className={classes.closeIcon} onClick={onClose} />}
        </div>
    );
};

UserProfileCard.propTypes = {
    nickName: PropTypes.string,
    onClose: PropTypes.func,
};

export default withStyles(useStyles)(UserProfileCard);
