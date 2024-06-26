export const useStyles = (MUITheme) => ({
    basicTextFieldGrid: {
        display: "flex",
        alignItems: "center",
        "& label": {
            color: MUITheme.palette.text.darkGrey,
            fontSize: 12,
            letterSpacing: 0.4,
            "&.MuiFormLabel-root.Mui-focused": { color: MUITheme.palette.text.darkGrey },
        },
        [MUITheme.breakpoints.down("xs")]: { width: "100%" },
    },
    textFieldWithExtraText: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    description: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: 40,
        "& p": {
            marginTop: 20,
            color: MUITheme.palette.text.lightGrey,
            fontSize: 14,
            letterSpacing: 0.25,
            lineHeight: "20px",
            "& a": {
                color: MUITheme.palette.primary.main,
                textDecoration: "none",
            },
            [MUITheme.breakpoints.down("sm")]: { marginTop: 0 },
        },
        [MUITheme.breakpoints.down("sm")]: {
            paddingLeft: 0,
            marginTop: 0,
            marginBottom: 10,
        },
    },
    iconTooltipContainer: {
        width: "auto !important",
        position: "relative",
        "& > svg": {
            paddingRight: 8,
            color: MUITheme.palette.text.disabled,
            cursor: "pointer",
            fontSize: 18,
            verticalAlign: "middle",
        },
        "& p": {
            width: 377,
            padding: 16,
            borderRadius: 4,
            display: "none",
            position: "absolute",
            bottom: 9,
            background: MUITheme.palette.text.lightGrey,
            boxShadow:
                "0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)",
            color: MUITheme.palette.text.white,
            fontSize: 16,
            lineHeight: "20px",
            zIndex: 999,
        },
        "&:hover": {
            "& svg": { color: MUITheme.palette.primary.main },
            "& p": { display: "block" },
        },
    },
    charLength: {
        marginBottom: 25,
        display: "block",
        paddingLeft: 14,
        color: MUITheme.palette.text.primary,
        fontSize: 12,
        letterSpacing: 0.39,
        [MUITheme.breakpoints.down("sm")]: { marginBottom: 10 },
    },
    extraInfo: {
        marginLeft: 17,
        color: MUITheme.palette.text.primary,
        fontFamily: MUITheme.typography.fontFamily,
        fontSize: 12.17,
        letterSpacing: 0.4,
        lineHeight: "16px",
    },
    errorField: {
        "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: 2,
            borderColor: MUITheme.palette.border.alertBox,
        },
    },
});
