import { makeStyles } from "@mui/styles";
import { CustomThemeOptions } from "../../assets/ThemeTypes";

export const useStyles = makeStyles((theme: CustomThemeOptions) => ({
  styledButton: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "transparent",
    padding: "13px 28px 11px",
    color: theme.palette.text.main,
    textTransform: "uppercase",
    fontWeight: 500,
    letterSpacing: "1.25px",
    lineHeight: "16px",
    "&:disabled": {
      backgroundColor: theme.palette.background.disabled.gray,
      color: theme.palette.text.secondary,
    },
  },
  blueBg: {
    color: theme.palette.text.white,
    backgroundColor: theme.palette.primary.main,
    "&:hover": { backgroundColor: theme.palette.text.hover.blue },
  },
  blackBg: {
    backgroundColor: theme.palette.background.black,
    "& i": {
      fontSize: 24,
      marginRight: 5,
    },
    "&:hover": {
      backgroundColor: theme.palette.background.white,
      borderColor: theme.palette.background.black,
      color: theme.palette.text.hover.black,
    },
  },
  transparentBg: {
    backgroundColor: "transparent",
    color: `${theme.palette.primary.main} !important`,
    "&:disabled": {
      color: `${theme.palette.text.disabled} !important`,
      backgroundColor: "transparent",
    },
    "&:hover": {
      backgroundColor: theme.palette.background.hover.blue,
      color: theme.palette.text.hover.blue,
    },
  },
  red: {
    color: theme.palette.text.red,
    "&:hover": {
      backgroundColor: theme.palette.background.hover.red,
      color: theme.palette.text.secondary,
    },
  },
  redBg: {
    padding: "13px 38px 11px",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.red,
    "&:hover": {
      backgroundColor: theme.palette.background.hover.red,
      color: theme.palette.text.secondary,
    },
  },
  transparentBlueBorder: {
    borderColor: theme.palette.primary.main,
    backgroundColor: "transparent !important",
    color: theme.palette.primary.main,
    "&:hover": {
      borderColor: theme.palette.text.hover.blue,
      backgroundColor: `${theme.palette.background.hover.blue} !important`,
      color: theme.palette.text.hover.blue,
    },
    "&:disabled": {
      borderWidth: 2,
      borderColor: theme.palette.background.disabled,
      color: theme.palette.text.disabled,
    },
  },
  transparentBlueBorderDisable: {
    borderWidth: 2,
    borderColor: theme.palette.background.disabled,
    color: theme.palette.text.disabled,
  },
  gradientBg: {
    borderColor: theme.palette.primary.main,
  },
}));
