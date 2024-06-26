import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useStyles } from "./styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AlertBox from "../AlertBox";
import validator from "shared/dist/utils/validator";
import { forgotPasswordConstraints } from "./validationConstraints";

const SNETForgotPassword = ({ title, desription, email, forgotPasswordError, onSubmit }) => {
    const classes = useStyles();

    const [localEmail, setEmail] = useState(email);
    const [validationErr, setValidationErr] = useState("");

    useEffect(() => {
        if (email) {
            setEmail(email.toLowerCase());
        }
    }, [email]);

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setValidationErr("");
        const isNotValid = validator({ email: localEmail }, forgotPasswordConstraints);
        if (isNotValid) {
            setValidationErr(isNotValid[0]);
            return;
        }
        onSubmit(localEmail);
    };

    return (
        <Grid container spacing={24} className={classes.forgotPwdMainContainer}>
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.forgotPwdContent}>
                <Typography variant="h3">{title}</Typography>
                <Typography>{desription}</Typography>
                <form noValidate autoComplete="off" className={classes.forgotPwdForm}>
                    <TextField
                        id="outlined-username-input"
                        label="Email"
                        className={classes.textField}
                        type="text"
                        name="email"
                        margin="normal"
                        variant="outlined"
                        value={localEmail}
                        onChange={(e) => setEmail(e.target.value.toLowerCase())}
                    />
                    <div className={classes.alertBoxContainer}>
                        <AlertBox type="error" message={validationErr || forgotPasswordError} />
                    </div>
                    <Button
                        color="primary"
                        variant="contained"
                        children="reset password"
                        type="submit"
                        onClick={handleSubmit}
                    />
                </form>
            </Grid>
        </Grid>
    );
};

SNETForgotPassword.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
    forgotPasswordError: PropTypes.string,
    onSubmit: PropTypes.func,
};

SNETForgotPassword.defaultProps = {
    desription: "We'll email you instructions on how to reset it.",
};

export default SNETForgotPassword;
