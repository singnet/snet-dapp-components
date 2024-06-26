import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import { withStyles } from "@mui/styles";

const SNETAppBar = withStyles((MuiTheme) => ({
    root: (props) => {
        const rootStyles = {};
        if (props.color === "white") {
            rootStyles.backgroundColor = MuiTheme.palette.background.white;
            return rootStyles;
        }
        if (props.color === "purple") {
            rootStyles.backgroundColor = MuiTheme.palette.purple.main;
            return rootStyles;
        }
        return rootStyles;
    },
}))(AppBar);

SNETAppBar.propTypes = {
    color: PropTypes.oneOf(["white", "purple"]),
};

export default SNETAppBar;
