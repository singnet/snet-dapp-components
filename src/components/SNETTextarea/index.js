import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import InfoIcon from "@mui/icons-material/Info";

import { useStyles } from "./styles";

const SNETTextarea = ({
    classes,
    label,
    rowCount,
    colCount,
    name,
    value,
    onChange,
    content,
    minCount,
    maxCount,
    showInfoIcon,
    infoMsg,
    extraInfo,
    disabled,
    error,
}) => {
    return (
        <div className={classes.textareaIconContainer}>
            {showInfoIcon ? (
                <div className={classes.iconTooltipContainer}>
                    <InfoIcon />
                    <p>{infoMsg}</p>
                </div>
            ) : null}
            <div className={classes.textareaContainer}>
                <span className={classes.label}>{label}</span>
                <textarea
                    rows={rowCount}
                    cols={colCount}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className={error ? classes.error : ""}
                    maxLength={maxCount}
                >
                    {content}
                </textarea>
                {maxCount ? (
                    <span className={classes.charLength}>
                        {minCount}/{maxCount} char
                    </span>
                ) : null}
                {extraInfo ? <span className={classes.extraInfo}>{extraInfo}</span> : null}
            </div>
        </div>
    );
};

SNETTextarea.propTypes = {
    label: PropTypes.string,
    rowCount: PropTypes.number,
    colCount: PropTypes.number,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    content: PropTypes.string,
    minCount: PropTypes.number,
    maxCount: PropTypes.number,
};

export default withStyles(useStyles)(SNETTextarea);
