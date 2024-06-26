import React from "react";
import WarningIcon from "@mui/icons-material/Warning";
import PropTypes from "prop-types";

import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";

const Icon = {
    warning: <WarningIcon />,
};

const BulletPoint = ({ message, type }) => {
    return (
        <div>
            <div>{Icon[type]}</div>
            <AlertBox type={type} message={message} />
        </div>
    );
};

BulletPoint.defaultProps = {
    type: alertTypes.WARNING,
};

BulletPoint.propTypes = {
    message: PropTypes.string,
    type: PropTypes.oneOf(Object.values(alertTypes)),
};

export default BulletPoint;
